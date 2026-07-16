import { IBancoLeite, IUsuario } from "../../models"
import { IClassificacaoBancoLeite } from "../../models/Classificacao"

declare module 'knex/types/tables' {
  interface Tables {
    usuario: IUsuario,
    bancoLeite: IBancoLeite,
    classificacaoBancoLeite:  IClassificacaoBancoLeite
  }
}