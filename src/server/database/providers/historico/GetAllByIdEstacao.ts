import { Knex } from "../../knex"
import { IHistorico } from "../../models";
import { ETableNames } from "../../ETable";

export const getAllByIdEstacao = async (id: number): 
  Promise<Pick<IHistorico, 'id' | 'data' | 'descricao' | 'nomeUsuario' | 'emailUsuario'>[] | Error> => {
  try {
    const result = await Knex(ETableNames.historico)
      .select('id', 'data', 'descricao', 'nomeUsuario', 'emailUsuario')
      .where('fk_Estacao_id', '=', id)
      .orderBy('data', 'desc');
    
    if (result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}