import { IBancoLeite, IUsuario } from "../../models"

declare module 'knex/types/tables' {
  interface Tables {
    usuario: IUsuario,
    bancoLeite: IBancoLeite,
  }
}