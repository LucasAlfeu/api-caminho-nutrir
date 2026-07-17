import { Knex } from "../../knex"
import { IClassificacao } from "../../models";
import { ETableNames } from "../../ETable";

export const updateById = async (id: number, classificacao: Omit<IClassificacao, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.classificacao)
      .update(classificacao)
      .where('id', '=', id);

    if(result > 0) return;

    return new Error("Erro ao atualizar a classiicação dos bancos de leite");
  } catch (error) {
    console.log(error)
    return new Error("Erro ao atualizar a classiicação dos bancos de leite");
  }
}