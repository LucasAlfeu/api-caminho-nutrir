import type { Request, Response } from "express";
import { IEstacao } from "../../database/models";
import { validation } from "../../shared/middlewares/Validation";
import * as yup from 'yup'
import { EstacaoProvider } from "../../database/providers/estacao";
import { StatusCodes } from "http-status-codes";
import { IRequest } from "../../database/models/IRequest";
import { HistoricoProvider } from "../../database/providers/historico";

export interface IBoryProps extends IRequest { }

export const createRequestValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    nome: yup.string().required().min(3).max(150),
    descricao: yup.string().default("").optional().max(300),
    telefone: yup.string().default("0000000000").optional().max(30),
    cep: yup.string().required().min(8).max(8),
    logradouro: yup.string().required(),
    bairro: yup.string().required(),
    numero: yup.string().required(),
    complemento: yup.string().default("").optional(),
    municipio: yup.string().required(),
    uf: yup.string().required(),
    idClassificacao: yup.number().default(0),
    nomeUsuario: yup.string().required().min(3).max(300),
    emailUsuario: yup.string().required().min(3).max(150),
  }))
}));

export const createRequest = async (req: Request<{}, {}, IRequest>, res: Response) => {
  const { nomeUsuario, emailUsuario, idClassificacao, ...restoDaSolicitacao } = req.body;

  let historicoSolicitacao = { nomeUsuario, emailUsuario };

  const solicitacaoParaBanco = {
    ...restoDaSolicitacao,
    fk_Classificacao_id: idClassificacao ?? null
  };

  const result = await EstacaoProvider.createRequest(solicitacaoParaBanco);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  const dadosParaHistorico = {
    ...historicoSolicitacao,
    fk_Estacao_id: result,
    descricao: "Solicitado"
  }

  const createHistoricoResul = await HistoricoProvider.create(dadosParaHistorico)
  console.log(createHistoricoResul)

  if (createHistoricoResul instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: createHistoricoResul.message
      }
    });
  }
  
  return res.status(StatusCodes.CREATED).json(result);
}