import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'

interface IUsuario {
  nome: string,
  usuario: string,
  senha: string,
  email: string,
  matricula: string,
  indAdm: boolean
}

const bodyValidation: yup.ObjectSchema<IUsuario> = yup.object({
  nome: yup.string().required().min(3),
  usuario: yup.string().required(),
  senha: yup.string().required().min(6),
  email: yup.string().email().required(),
  matricula: yup.string().required(),
  indAdm: yup.boolean().default(() => { return false }),
});

export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {

  let validadeData: IUsuario | undefined = undefined

  try {
    validadeData = await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (erro) {
    const yupError = erro as yup.ValidationError;
    let validationErrors: Record<string, string> = { }

    yupError.inner.forEach(err => {
      if(!err.path) return

      validationErrors[err.path] = err.message
    })

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors
    })
  }

  console.log(validadeData)

  return res.send("Create! ");
}