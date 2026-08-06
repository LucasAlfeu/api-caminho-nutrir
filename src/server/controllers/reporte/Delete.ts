import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { EstacaoProvider } from "../../database/providers/estacao";
import { ReporteProvidedr } from "../../database/providers/reporte";
import { HistoricoProvider } from "../../database/providers/historico";

export interface IParamProps {
  id?: number;
}

export interface IQueryProps {
  nomeUsuario?: string;
  emailUsuario?: string;
  idEstacao: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().integer().required().moreThan(0)
  })),
  query: getSchema<IQueryProps>(yup.object({
    nomeUsuario: yup.string().optional().default(''),
    emailUsuario: yup.string().optional().default(''),
    idEstacao: yup.number().integer().required().moreThan(0)
  }))
}));

export const deleteById = async (req: Request<IParamProps, {}, {}, IQueryProps>, res: Response) => {

  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado'
      }
    });
  }

  const idEstacao = req.query.idEstacao;

  if (!idEstacao) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "idEstacao" precisa ser informado na URL'
      }
    });
  }
    
  const dadosParaHistorico = {
    nomeUsuario: req.query.nomeUsuario || "-",
    emailUsuario: req.query.emailUsuario || "-",
    fk_Estacao_id: idEstacao,
    descricao: "Reporte finalizado"
  };

  const createHistoricoResul = await HistoricoProvider.create(dadosParaHistorico);

  if (createHistoricoResul instanceof Error) {
    console.error("Erro ao salvar histórico de exclusão:", createHistoricoResul.message);
  }

  const result = await ReporteProvidedr.deleteById(req.params.id);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).send();
}