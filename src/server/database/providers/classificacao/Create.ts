import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IClassificacao } from "../../models";

export const create = async (classificacao: Omit<IClassificacao, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.classificacao).insert(classificacao).returning('id');

    if(typeof result === 'object') {
      return result.id
    } else if (typeof result === 'number'){
      return result;
    }

    return new Error("erro ao cadastrar uma classificação para os bancos de leite")
  } catch (error){
    console.error(error)
    return new Error('Erro ao cadastrar uma classificação para os bancos de leite!');
  }
  
}