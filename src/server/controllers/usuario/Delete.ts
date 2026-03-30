import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";

export interface IParamProps {
  id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().integer().required().moreThan(0)
  }))
}));

export const deleteById = async (req: Request<IParamProps>, res: Response) => {
  const id = Number(req.params.id);
  console.log(req.params)

  if(id === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  })

  return res.status(StatusCodes.NO_CONTENT).send();
}