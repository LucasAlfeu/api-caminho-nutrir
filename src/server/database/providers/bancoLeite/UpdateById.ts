import { Knex } from "../../knex"
import { IBancoLeite, IUsuario } from "../../models";
import { ETableNames } from "../../ETable";

export const updateById = async (id: number, bancoLeite: Omit<IBancoLeite, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.bancoLeite)
      .update(bancoLeite)
      .where('id', '=', id);

    if(result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error)
    return new Error("Erro ao atualizar o registro");
  }
}