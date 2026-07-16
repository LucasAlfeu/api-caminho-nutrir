import { Knex } from "../../knex"
import { IClassificacaoBancoLeite } from "../../models";
import { ETableNames } from "../../ETable";

export const getAll = async (page: number, limit: number, filter: string, id = 0): Promise<IClassificacaoBancoLeite[] | Error> => {
  try {
    const result = await Knex(ETableNames.classificacaoBancoLeite)
      .select("*")
      .where(qb => {
        if (id > 0) {
            qb.where('id', id).orWhere('nome', 'like', `%${filter}%`);
        } else {
            qb.where('nome', 'like', `%${filter}%`);
        }
      })
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && result.every(item => item.id !== id)) {
      const resultById = await Knex(ETableNames.classificacaoBancoLeite)
        .select('*')
        .where('id', '=', id)
        .first();
      
      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.error(error);
    return new Error('Erro ao consultar as classificações dos bancos de leite');
  }
};