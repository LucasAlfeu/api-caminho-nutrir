import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { Knex } from "../../database/knex";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers/usuario";

export interface IBoryProps extends Omit<IUsuario, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    nome: yup.string().required().min(3).max(150),
    usuario: yup.string().required().max(20),
    senha: yup.string().required().min(6),
    email: yup.string().email().required(),
    matricula: yup.string().required(),
    indAdm: yup.boolean().default(() => { return false }),
  }))
}));

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  const result = await UsuarioProvider.create(req.body)

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
}