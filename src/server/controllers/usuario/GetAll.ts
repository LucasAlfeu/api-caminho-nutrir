import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { UsuarioController } from ".";
import { UsuarioProvider } from "../../database/providers/usuario";

export interface IQueryProps {
  id?: number | undefined
  page?: number | undefined;
  limit?: number | undefined;
  filter?: string | undefined;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    id: yup.number().integer().optional().moreThan(0),
    filter: yup.string().optional(), 
  }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  const result = await UsuarioProvider.getAll(
    req.query.page || 1, 
    req.query.limit || 10, 
    req.query.filter || '', 
    req.query.id ? Number(req.query.id) : 0
  )
  const count = await UsuarioProvider.count(req.query.filter)

  console.log('idUsuario', req.headers.idUsuario);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: count.message}
    })
  }

  res.setHeader('x-total-count', count);
  res.setHeader('Access-Control-Expose-Headers', 'x-total-count');

  return res.status(StatusCodes.OK).json(result);
}