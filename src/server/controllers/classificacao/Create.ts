import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IClassificacao } from "../../database/models";
import { ClassificacaoProvider } from "../../database/providers/classificacao";

export interface IBoryProps extends Omit<IClassificacao, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    descricao: yup.string().required().min(3).max(150),
    cor: yup.string().required()
  }))
}));

export const create = async (req: Request<{}, {}, IClassificacao>, res: Response) => {
  const result = await ClassificacaoProvider.create(req.body)

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
}