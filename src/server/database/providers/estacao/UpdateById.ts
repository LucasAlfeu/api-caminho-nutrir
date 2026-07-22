import { Knex } from "../../knex"
import { IEstacao } from "../../models";
import { ETableNames } from "../../ETable";

export type IEstacaoUpdate = Omit<IEstacao, 'id' | 'idClassificacao'> & {
  fk_Classificacao_id: number;
};

export const updateById = async (id: number, estacao: IEstacaoUpdate): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.estacao)
      .update(estacao)
      .where('id', '=', id);

    if(result > 0) return;

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error)
    return new Error("Erro ao atualizar o registro");
  }
}