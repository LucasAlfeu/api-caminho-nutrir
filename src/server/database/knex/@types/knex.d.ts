import { IEstacao, IHistorico, IUsuario } from "../../models"
import { IClassificacao } from "../../models/Classificacao"
import { IReporte } from "../../models/Reporte"

declare module 'knex/types/tables' {
  interface Tables {
    usuario: IUsuario,
    estacao: IEstacao,
    classificacao:  IClassificacao,
    historico: IHistorico,
    reporte: IReporte
  }
}