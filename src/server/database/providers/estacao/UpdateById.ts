import { Knex } from "../../knex"
import { IEstacao } from "../../models";
import { ETableNames } from "../../ETable";

export const updateById = async (id: number, bancoLeite: Omit<IEstacao, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.estacao)
      .update(bancoLeite)
      .where('id', '=', id);

    if(result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error)
    return new Error("Erro ao atualizar o registro");
  }
}