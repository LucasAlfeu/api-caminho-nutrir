import type { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/Validation";
import { EstacaoProvider } from "../../database/providers/estacao";
import { HistoricoProvider } from "../../database/providers/historico";


export interface IParamProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(yup.object({
    id: yup.number().required().moreThan(0)
  }))
}));

export const getById = async (req: Request<IParamProps>, res: Response) => {
  if(!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado'
      }
    })
  }

  const result = await EstacaoProvider.getById(req.params.id);

  if(result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  const recuperaHistorico = await HistoricoProvider.getAllByIdEstacao(result.id)

  if (recuperaHistorico instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: recuperaHistorico.message
      }
    });
  }

  // Agora extraímos 'idClassificacao' (que é o que está na interface)
  const { idClassificacao, ...restoDoResult } = result;

  const resultCompleto = {
    ...restoDoResult,
    classificacao: idClassificacao, // Renomeando para o Front-end
    historico: recuperaHistorico.reverse()
  }
  
  return res.status(StatusCodes.OK).json(resultCompleto);
}