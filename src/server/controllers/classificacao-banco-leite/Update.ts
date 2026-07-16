import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IClassificacaoBancoLeite } from "../../database/models";
import { ClassificacaoBancoLeiteProvider } from "../../database/providers/classificacaoBancoLeite";

export interface IBodyProps extends Omit<IClassificacaoBancoLeite, 'id' | 'indAdm' | 'indLiberado' | 'senha'> {
  senha?: string;
}

export interface IParamProps {
  id?: number;
}

export const updateValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object({
    descricao: yup.string().required().min(3).max(150),
    cor: yup.string().required()
  }) as any),
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
    });
  }

  const result = await ClassificacaoBancoLeiteProvider.updateById(req.params.id, req.body);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.OK).json(result);
};