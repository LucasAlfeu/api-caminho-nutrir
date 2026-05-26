import { Knex } from "../../knex"
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETable";


export const getAllByNome = async (nome: string): Promise<IUsuario[] | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('nome', 'like', `%${nome}%`); 
    
    if (result && result.length > 0) return result;

    return new Error('Nenhum registro encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao buscar os registros');
  }
}