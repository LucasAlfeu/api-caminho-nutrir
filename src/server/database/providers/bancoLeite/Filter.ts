import { Knex } from "../../knex"
import { ETableNames } from "../../ETable";
import { IBancoLeite } from "../../models";


export const getAllByNomeOuCidade = async (nomeOuCidade: string): Promise<IBancoLeite[] | Error> => {
  try {
    const result = await Knex(ETableNames.bancoLeite)
      .select('*')
      .where('nome', 'like', `%${nomeOuCidade}%`)
      .orWhere('cidade', 'like', `%${nomeOuCidade}%`); 

    if (result && result.length > 0) return result;

    return new Error('Nenhum registro encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao buscar os registros');
  }
}