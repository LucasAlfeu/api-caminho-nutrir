import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { UsuarioProvider } from "../../database/providers/usuario";

export interface IBoryProps {
  email?: string,
  matricula?: string,
  usuario?: string,
  novaSenha?: string,
}

export const resetPasswordValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    usuario: yup.string().required(),
    novaSenha: yup.string().required().min(6),
    email: yup.string().email().required(),
    matricula: yup.string().required(),
  }))
}));

export const resetPassword = async (req: Request<IBoryProps>, res: Response) => {
  if(!req.body.email) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O "email" precisa ser informado'
      }
    })
  }
  if(!req.body.matricula) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'A "matricula" precisa ser informada'
      }
    })
  }
  if(!req.body.usuario) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O "usuário" precisa ser informado'
      }
    })
  }
  if(!req.body.novaSenha) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'A "nova senha" precisa ser informada'
      }
    })
  }

  const result = await UsuarioProvider.resetPassword(req.body.usuario, req.body.email, req.body.matricula, req.body.novaSenha,);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.OK).json(result);
}