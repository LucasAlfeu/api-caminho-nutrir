import { Knex } from "../../knex"
import { IEstacao } from "../../models";
import { ETableNames } from "../../ETable";

export const getById = async (id: number): Promise<IEstacao | Error> => {
  try {
    const result = await Knex(ETableNames.estacao)
      .select("*", Knex.raw('"fk_Classificacao_id" as "idClassificacao"'))
      .where('id', '=', id)
      .first();
    
    if (result) {
      // Como já renomeamos no select com Knex.raw, a propriedade idClassificacao já vem pronta
      return result as IEstacao;
    }

    return new Error('Registro não encontrado');
  } catch (error) {
    console.error("ERRO NO GET BY ID:", error);
    return new Error('Registro não encontrado');
  }
};