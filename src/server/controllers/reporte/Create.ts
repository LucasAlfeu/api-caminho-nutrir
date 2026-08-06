import type { Request, Response } from "express";
import { validation } from "../../shared/middlewares/Validation";
import * as yup from 'yup'
import { StatusCodes } from "http-status-codes";
import { HistoricoProvider } from "../../database/providers/historico";
import { IReporte } from "../../database/models/Reporte";
import { ReporteProvidedr } from "../../database/providers/reporte";


export interface IBoryProps extends Omit<IReporte, 'id'> { }
export interface IQueryProps {
  nomeUsuario?: string;
  emailUsuario?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBoryProps>(yup.object({
    relato: yup.string().required().max(500),
    idEstacao: yup.number().required(),
  }))
}));

export const create = async (req: Request<{}, {}, IBoryProps>, res: Response) => {

  const { idEstacao, ...restoDoBody } = req.body;

  const bodyParaInserir = {
    ...restoDoBody,
    fk_Estacao_id: idEstacao
  };

  const result = await ReporteProvidedr.create(bodyParaInserir as any);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  const dadosParaHistorico = {
    nomeUsuario: req.query.nomeUsuario as string || "-",
    emailUsuario: req.query.emailUsuario as string || "-",
    fk_Estacao_id: idEstacao,
    descricao: "Reporte cadastrado"
  };

  const createHistoricoResul = await HistoricoProvider.create(dadosParaHistorico);

  if (createHistoricoResul instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: createHistoricoResul.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);

}