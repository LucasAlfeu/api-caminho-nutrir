import { ETableNames } from "../../ETable";
import { Knex } from "../../knex"
import { IReporte } from "../../models/Reporte";


export const getAllById = async (id: number): Promise<Pick<IReporte, 'id' | 'relato'>[] | Error> => {
  try {
    const result = await Knex(ETableNames.reporte)
      .select('id', 'relato')
      .where('fk_Estacao_id', '=', id);
    
    if(result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}