import { Knex } from "../../knex"
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETable";

export const updateById = async (id: number, usuario: Partial<Omit<IUsuario, 'id'>>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .update(usuario)
      .where('id', '=', id);

    if(result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error)
    return new Error("Erro ao atualizar o registro");
  }
}