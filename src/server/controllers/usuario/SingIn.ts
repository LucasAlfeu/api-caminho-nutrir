import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers/usuario";

export interface IBoryProps extends Omit<IUsuario, 'id' | 'nome' | 'matricula' | 'email' | 'indAdm' | 'indLiberado'> {}

export const singInValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    usuario: yup.string().required(),
    senha: yup.string().required().min(6),
  }))
}));

export const singIn = async (req: Request<{}, {}, IBoryProps>, res: Response) => {

  const { usuario, senha } = req.body


  const result = await UsuarioProvider.getByUsuario(usuario)

  if(result instanceof Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Usuário ou senha inválidos'
      }
    });
  }

  if(senha !== result.senha) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Usuário ou senha inválidos'
      }
    });
  } else {
    return res.status(StatusCodes.OK).json({ accessToken: 'teste.teste.teste'})
  }

}