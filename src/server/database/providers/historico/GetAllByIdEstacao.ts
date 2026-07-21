import { Knex } from "../../knex"
import { IHistorico } from "../../models";
import { ETableNames } from "../../ETable";


export const getAllByIdEstacao = async (id: number): Promise<IHistorico[] | Error> => {
  try {
    const result = await Knex(ETableNames.historico)
      .select('*')
      .where('id', '=', id)
      .first();
    
    if(result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}