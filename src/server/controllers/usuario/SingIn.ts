import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IUsuario } from "../../database/models";
import { UsuarioProvider } from "../../database/providers/usuario";
import { JWTService, PasswordCrypto } from "../../shared/service";

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

  const passwordMatch = await PasswordCrypto.verifyPassword(senha, result.senha)

  if(!passwordMatch) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Usuário ou senha inválidos'
      }
    });
  } else {

    const accessToken = JWTService.sign({uid: result.id})

    if(accessToken === 'JWT_SECRET_NOT_FOUND') {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: 'Erro ao gerar o token de acesso'
        }
      })
    }


    return res.status(StatusCodes.OK).json({ 
      accessToken:  accessToken, 
      email: result.email,
      id: result.id,
      usuario: result.usuario,
      nome: result.nome,
      matricula: result.matricula,
      indAdm: result.indAdm,
      indLiberado: result.indLiberado,
    })
  }

}