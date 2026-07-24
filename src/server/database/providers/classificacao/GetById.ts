import { Knex } from "../../knex"
import { IClassificacao } from "../../models";
import { ETableNames } from "../../ETable";


export const getById = async (id: number): Promise<IClassificacao | Error> => {
  try {
    const result = await Knex(ETableNames.classificacao)
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