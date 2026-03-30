import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";

export interface IQueryProps {
  page?: number | undefined;
  limit?: number | undefined;
  filter?: string | undefined;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(), 
  }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query)

  res.setHeader('x-total-count', '1');
  res.setHeader('Access-Control-Expose-Headers', 'x-total-count');

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      nome: 'Lucas Alfeu',
      usuario: 'lucasalfeu',
      email: 'teste@teste.com',
      matricula: '20230011254',
      indAdm: false
    }
  ]);
}