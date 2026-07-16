import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IClassificacaoBancoLeite } from "../../database/models";
import { ClassificacaoBancoLeiteProvider } from "../../database/providers/classificacaoBancoLeite";

export interface IBoryProps extends Omit<IClassificacaoBancoLeite, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    descricao: yup.string().required().min(3).max(150),
    cor: yup.string().required()
  }))
}));

export const create = async (req: Request<{}, {}, IClassificacaoBancoLeite>, res: Response) => {
  const result = await ClassificacaoBancoLeiteProvider.create(req.body)

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
}