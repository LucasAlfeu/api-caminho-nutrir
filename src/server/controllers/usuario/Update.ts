import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers/usuario";

export interface IBodyProps extends Omit<IUsuario, 'id' | 'indAdm' | 'indLiberado'> { }

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
  })),
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().required().moreThan(0),
  }))
}));

export const update = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado'
      }
    })
  }

  const result = await UsuarioProvider.updateById(req.params.id, req.body);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
}