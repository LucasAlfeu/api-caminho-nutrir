import { Knex } from "../../knex"
import { IClassificacaoBancoLeite } from "../../models";
import { ETableNames } from "../../ETable";

export const updateById = async (id: number, classificacaoBancoLeite: Omit<IClassificacaoBancoLeite, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.classificacaoBancoLeite)
      .update(classificacaoBancoLeite)
      .where('id', '=', id);

    if(result > 0) return;

    return new Error("Erro ao atualizar a classiicação dos bancos de leite");
  } catch (error) {
    console.log(error)
    return new Error("Erro ao atualizar a classiicação dos bancos de leite");
  }
}