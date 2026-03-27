import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation.js";

export interface IBodyProps {
  nome: string,
  usuario: string,
  senha: string,
  email: string,
  matricula: string,
  indAdm: boolean,
}

export interface IParamProps {
  id?: number;
}

export const updateValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object({
    nome: yup.string().required().min(3),
    usuario: yup.string().required(),
    senha: yup.string().required().min(6),
    email: yup.string().email().required(),
    matricula: yup.string().required(),
    indAdm: yup.boolean().default(() => { return false }),
  })),
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().required().moreThan(0),
  }))
}));

export const update = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  console.log(req.params)
  console.log(req.body)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implantado! ");
}