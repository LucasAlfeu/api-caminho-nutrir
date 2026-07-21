import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IHistorico } from "../../models";

export const create = async (historico: Omit<IHistorico, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.historico).insert(historico).returning('id');

    if(typeof result === 'object') {
      return result.id
    } else if (typeof result === 'number'){
      return result;
    }

    return new Error("erro ao cadastrar um histórico para o bancos de leite")
  } catch (error){
    console.error(error)
    return new Error('Erro ao cadastrar um histórico para o bancos de leite!');
  }
  
}