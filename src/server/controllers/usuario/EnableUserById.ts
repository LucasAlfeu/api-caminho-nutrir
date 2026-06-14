import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { UsuarioProvider } from "../../database/providers/usuario";

export interface IParamProps {
  id?: number;
}

export const enableUserByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().required().moreThan(0)
  }))
}));

export const enableUserById = async (req: Request<IParamProps>, res: Response) => {
  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmtro "id" precisa ser informado'
      }
    })
  }

  const result = await UsuarioProvider.enableUserById(req.params.id);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.OK).json(result);
}