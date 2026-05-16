import type { Request, Response } from "express";
import { IBancoLeite } from "../../database/models";
import { validation } from "../../shared/middlewares/Validation";
import * as yup from 'yup'
import { BancoLeiteProvider } from "../../database/providers/bancoLeite";
import { StatusCodes } from "http-status-codes";


export interface IBoryProps extends Omit<IBancoLeite, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    nome: yup.string().required().min(3).max(150),
    descricao: yup.string().default("").optional().max(300),
    cep: yup.string().required().min(8).max(8),
    logradouro: yup.string().required(),
    bairro: yup.string().required(),
    numero: yup.string().required(),
    complemento: yup.string().default("").optional(),
    municipio: yup.string().required(),
    uf: yup.string().required(),
    longitude: yup.string().required(),
    latitude: yup.string().required(),
  }))
}));

export const create = async (req: Request<{}, {}, IBancoLeite>, res: Response) => {
  const result = await BancoLeiteProvider.create(req.body)

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
}