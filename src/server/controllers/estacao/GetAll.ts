import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { EstacaoProvider } from "../../database/providers/estacao";
import { HistoricoProvider } from "../../database/providers/historico";
import { ClassificacaoProvider } from "../../database/providers/classificacao";
import { IClassificacao } from "../../database/models";


export interface IQueryProps {
  id?: number | undefined
  page?: number | undefined;
  limit?: number | undefined;
  filter?: string | undefined;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    id: yup.number().integer().optional().moreThan(0),
    filter: yup.string().optional(), 
  }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  const result = await EstacaoProvider.getAll(
    req.query.page || 1, 
    req.query.limit || 10, 
    req.query.filter || '', 
    req.query.id ? Number(req.query.id) : 0
  );
  
  const count = await EstacaoProvider.count(req.query.filter);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: result.message } });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: count.message } });
  }

  const resultCompleto = await Promise.all(result.map(async (estacao) => {
    
    const recuperaHistorico = await HistoricoProvider.getAllByIdEstacao(estacao.id);
    
    let historicoReverso: any[] = [];
    if (!(recuperaHistorico instanceof Error)) {
      historicoReverso = recuperaHistorico.reverse();
    }

    const dataUltimaInsercao = historicoReverso.length > 0 ? historicoReverso[0].data : null;

    const getCategoria = await ClassificacaoProvider.getById(estacao.idClassificacao);

    let categoria: any;
    if (!(getCategoria instanceof Error)) {
      categoria = getCategoria;
    }

    const { fk_Classificacao_id, idClassificacao, ...estacaoFormatada } = estacao as any;
  
    return {
      ...estacaoFormatada,
      categoria: categoria,
      dataUltimaAtualizacao: dataUltimaInsercao,
    };
  }));

  res.setHeader('x-total-count', String(count)); 
  res.setHeader('Access-Control-Expose-Headers', 'x-total-count');

  return res.status(StatusCodes.OK).json(resultCompleto);
}