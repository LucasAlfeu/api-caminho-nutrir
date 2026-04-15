import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IUsuario } from "../../database/models";

export interface IBodyProps extends Omit<IUsuario, 'id'> { }

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
  const id = Number(req.params.id);

  console.log(req.params);
  console.log(req.body);

  if (id === 99999) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: 'Registro não encontrado'
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).send();
}