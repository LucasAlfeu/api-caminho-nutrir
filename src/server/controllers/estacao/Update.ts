import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IEstacao } from "../../database/models";
import { EstacaoProvider } from "../../database/providers/estacao";

export interface IBodyProps extends Omit<IEstacao, 'id'> { }

export interface IParamProps {
  id?: number;
}

export const updateValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object({
    nome: yup.string().required().min(3).max(150),
    descricao: yup.string().default("").optional().max(300),
    cep: yup.string().required().min(8).max(8),
    logradouro: yup.string().required(),
    bairro: yup.string().required(),
    numero: yup.string().required(),
    complemento: yup.string().default("").optional(),
    municipio: yup.string().required(),
    uf: yup.string().required(),
    longitude: yup.string().required(),
    latitude: yup.string().required(),
    dataUltimaAtualizacao: yup.string().required(),
    idClassificacao: yup.number().required(),   
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

  const result = await EstacaoProvider.updateById(req.params.id, req.body);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
}