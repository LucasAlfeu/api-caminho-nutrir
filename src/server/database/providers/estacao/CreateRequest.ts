import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IEstacao } from "../../models";
import { IRequest } from "../../models/IRequest";

export type IEstacaoInsert = Omit<IRequest, 'idClassificacao' | 'nomeUsuario' | 'emailUsuario'> & {
  fk_Classificacao_id: number;
};

export const createRequest = async (bancoLeite: IEstacaoInsert): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.estacao).insert(bancoLeite).returning('id');

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