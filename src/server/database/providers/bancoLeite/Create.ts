import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IBancoLeite } from "../../models";

export const create = async (bancoLeite: Omit<IBancoLeite, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.bancoLeite).insert(bancoLeite).returning('id');

    if(typeof result === 'object') {
      return result.id
    } else if (typeof result === 'number'){
      return result;
    }

    return new Error("erro ao cadastrar o registro")
  } catch (error){
    console.error(error)
    return new Error('Erro ao cadastrar o registro!');
  }
  
}