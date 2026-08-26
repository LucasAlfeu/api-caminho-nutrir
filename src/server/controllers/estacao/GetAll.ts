import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation";
import { EstacaoProvider } from "../../database/providers/estacao";
import { HistoricoProvider } from "../../database/providers/historico";
import { ClassificacaoProvider } from "../../database/providers/classificacao";
import { ReporteProvidedr } from "../../database/providers/reporte";

export interface IQueryProps {
  id?: number | undefined;
  page?: number | any;
  limit?: number | any;
  filter?: string | undefined;
  indValidado?: boolean | any;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    id: yup.number().integer().optional().moreThan(0),
    filter: yup.string().optional(), 
    indValidado: yup.boolean().optional(), 
  }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  const isIndValidado = req.query.indValidado === 'true' || req.query.indValidado === true;
  
  const result = await EstacaoProvider.getAll(
    req.query.page, 
    req.query.limit, 
    req.query.filter || '', 
    req.query.id ? Number(req.query.id) : 0,
    req.query.indValidado !== undefined ? isIndValidado : undefined
  );
  
  const count = await EstacaoProvider.count(req.query.filter);

  if (result instanceof Error) {
    console.error("DETALHE DO ERRO NO ESTACAO PROVIDER:", result);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
      errors: { 
        default: result.message,
        stack: result.stack 
      } 
    });
  } else if (count instanceof Error) {
    console.error("DETALHE DO ERRO NO COUNT:", count);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
      errors: { 
        default: count.message,
        stack: count.stack 
      } 
    });
  } 

  const resultCompleto = await Promise.all(result.map(async (estacao: any) => {
    
    const recuperaHistorico = await HistoricoProvider.getAllByIdEstacao(estacao.id);
    
    let historicoReverso: any[] = [];
    if (!(recuperaHistorico instanceof Error)) {
      historicoReverso = recuperaHistorico.reverse();
    }

    const dataUltimaInsercao = historicoReverso.length > 0 ? historicoReverso[0].data : null;

    const getCategoria = await ClassificacaoProvider.getById(estacao.fk_Classificacao_id);

    let categoria: any = null;
    if (!(getCategoria instanceof Error)) {
      categoria = getCategoria;
    }

    const { fk_Classificacao_id, idClassificacao, ...estacaoFormatada } = estacao;

    const recuperaReporte = await ReporteProvidedr.getAllById(estacao.id);
    
    if (recuperaReporte instanceof Error) {
      console.error("Erro ao recuperar reportes:", recuperaReporte.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: recuperaReporte.message
        }
      });
    }

    const numReporte = recuperaReporte.length;
  
    return {
      ...estacaoFormatada,
      categoria: categoria,
      dataUltimaAtualizacao: dataUltimaInsercao,
      numReporte: numReporte,
    };
  }));

  res.setHeader('x-total-count', String(count)); 
  res.setHeader('Access-Control-Expose-Headers', 'x-total-count');

  return res.status(StatusCodes.OK).json(resultCompleto);
};