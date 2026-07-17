import { IEstacao, IUsuario } from "../../models"
import { IClassificacao } from "../../models/Classificacao"

declare module 'knex/types/tables' {
  interface Tables {
    usuario: IUsuario,
    estacao: IEstacao,
    classificacao:  IClassificacao
  }
}