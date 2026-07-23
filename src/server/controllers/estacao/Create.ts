import type { Request, Response } from "express";
import { IEstacao } from "../../database/models";
import { validation } from "../../shared/middlewares/Validation";
import * as yup from 'yup'
import { EstacaoProvider } from "../../database/providers/estacao";
import { StatusCodes } from "http-status-codes";
import { HistoricoProvider } from "../../database/providers/historico";


export interface IBoryProps extends Omit<IEstacao, 'id'> {}
export interface IQueryProps {
  nomeUsuario?: string;
  emailUsuario?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
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
  })),
  query: getSchema<IQueryProps>(yup.object({
      nomeUsuario: yup.string().required(),
      emailUsuario: yup.string().email().required()
    }))
}));

export const create = async (req: Request<{}, {}, IBoryProps>, res: Response) => {
  
  const { idClassificacao, ...restoDoBody } = req.body;

  const bodyParaInserir = {
    ...restoDoBody,
    fk_Classificacao_id: idClassificacao 
  };

  const result = await EstacaoProvider.create(bodyParaInserir as any);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

    const dadosParaHistorico = {
      nomeUsuario: req.query.nomeUsuario as string, 
      emailUsuario: req.query.emailUsuario as string, 
      fk_Estacao_id: result, 
      descricao: "Banco de leite cadastrado"
    };
  
    const createHistoricoResul = await HistoricoProvider.create(dadosParaHistorico);
    console.log(createHistoricoResul);
  
    if (createHistoricoResul instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: createHistoricoResul.message
        }
      });
    }

  return res.status(StatusCodes.CREATED).json(result);

}