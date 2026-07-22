import { Knex } from "../../knex"
import { IHistorico } from "../../models";
import { ETableNames } from "../../ETable";


export const getAllByIdEstacao = async (id: number): Promise<IHistorico[] | Error> => {
  try {
    const result = await Knex(ETableNames.historico)
      .select('*')
      .where('fk_Estacao_id', '=', id);
    
    if(result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}