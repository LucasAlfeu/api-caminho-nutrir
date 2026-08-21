import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { EstacaoProvider } from "../../database/providers/estacao";
import { HistoricoProvider } from "../../database/providers/historico";

export interface IParamProps {
  id?: number;
}

export interface IQueryProps {
  nomeUsuario?: string;
  emailUsuario?: string;
}

export const validadeRequestByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().required().moreThan(0)
  })),
    query: getSchema<IQueryProps>(yup.object({
      nomeUsuario: yup.string().required(),
      emailUsuario: yup.string().email().required()
    }))
}));

export const validadeRequestById = async (req: Request<IParamProps>, res: Response) => {
  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmtro "id" precisa ser informado'
      }
    })
  }

  const result = await EstacaoProvider.validadeRequestById(req.params.id);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  const idDaEstacao = Number(req.params.id);

  const dadosParaHistorico = {
    nomeUsuario: req.query.nomeUsuario as string, 
    emailUsuario: req.query.emailUsuario as string, 
    fk_Estacao_id: idDaEstacao, 
    descricao: "Banco de leite validado"
  };

  const createHistoricoResul = await HistoricoProvider.create(dadosParaHistorico);
  
    if (createHistoricoResul instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: createHistoricoResul.message
        }
      });
    }

  return res.status(StatusCodes.OK).json(result);
}