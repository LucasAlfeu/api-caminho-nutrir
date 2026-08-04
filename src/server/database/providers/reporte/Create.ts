import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IReporte } from "../../models/Reporte";

export const create = async (reporte: Omit<IReporte, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.reporte).insert(reporte).returning('id');

    if(typeof result === 'object') {
      return result.id
    } else if (typeof result === 'number'){
      return result;
    }

    return new Error("Erro ao cadastrar um reporte para os bancos de leite")
  } catch (error){
    console.error(error)
    return new Error('Erro ao cadastrar um reporte para os bancos de leite');
  }
  
}