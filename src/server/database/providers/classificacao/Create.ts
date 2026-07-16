import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IClassificacaoBancoLeite } from "../../models";

export const create = async (classificacaoBancoLeite: Omit<IClassificacaoBancoLeite, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.classificacaoBancoLeite).insert(classificacaoBancoLeite).returning('id');

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