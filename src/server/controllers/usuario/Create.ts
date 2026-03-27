import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation.js";

export interface IUsuario {
  nome: string,
  usuario: string,
  senha: string,
  email: string,
  matricula: string,
  indAdm: boolean,
}

export interface IFilter {
  filter?: string
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IUsuario>(yup.object({
    nome: yup.string().required().min(3),
    usuario: yup.string().required(),
    senha: yup.string().required().min(6),
    email: yup.string().email().required(),
    matricula: yup.string().required(),
    indAdm: yup.boolean().default(() => { return false }),
  })),
  query: getSchema<IFilter>(yup.object({
    filter: yup.string().optional().min(3).default(''),
  }))
}));

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  console.log(req.body)

  return res.send("Create! ");
}