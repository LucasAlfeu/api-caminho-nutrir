import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { IEstacao } from "../../database/models";
import { EstacaoProvider } from "../../database/providers/estacao";
import { HistoricoProvider } from "../../database/providers/historico";

export interface IBodyProps extends Omit<IEstacao, 'id'> { }

export interface IParamProps {
  id?: number;
}

export interface IQueryProps {
  nomeUsuario?: string;
  emailUsuario?: string;
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
    idClassificacao: yup.number().required(),  
    indValidado: yup.boolean().required(), 
  })),
  query: getSchema<IQueryProps>(yup.object({
    nomeUsuario: yup.string().required(),
    emailUsuario: yup.string().email().required()
  }))
}));

export const update = async (req: Request<IParamProps, any, IBodyProps, IQueryProps>, res: Response) => {
  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado'
      }
    });
  }

  const { idClassificacao, ...restoDoBody } = req.body;
  const bodyUptade = {
    ...restoDoBody,
    fk_Classificacao_id: idClassificacao,
  };

  const result = await EstacaoProvider.updateById(req.params.id, bodyUptade);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  const idDaEstacao = Number(req.params.id);

  const dadosParaHistorico = {
    nomeUsuario: req.query.nomeUsuario as string, 
    emailUsuario: req.query.emailUsuario as string, 
    fk_Estacao_id: idDaEstacao, 
    descricao: "Banco de leite atualizado"
  };

  const createHistoricoResul = await HistoricoProvider.create(dadosParaHistorico);

  if (createHistoricoResul instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: createHistoricoResul.message
      }
    });
  }
  
  return res.status(StatusCodes.NO_CONTENT).send();
}