import { Knex } from "../../knex"
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETable";


export const getByUsuario = async (usuario: string): Promise<IUsuario | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('usuario', '=', usuario)
      .first();
    
    if(result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}