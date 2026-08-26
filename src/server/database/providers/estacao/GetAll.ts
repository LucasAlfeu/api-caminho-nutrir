import { Knex } from "../../knex"
import { IEstacao } from "../../models";
import { ETableNames } from "../../ETable";

export const getAll = async (page: number, limit: number, filter: string, id = 0, indValidado?: boolean): Promise<IEstacao[] | Error> => {
  try {
    const result = await Knex(ETableNames.estacao)
      .select("*", '"fk_Classificacao_id" as idClassificacao')
      .where(qb => {
        if (id > 0) {
            qb.where('id', id).orWhere('nome', 'like', `%${filter}%`);
        } else {
            qb.where('nome', 'like', `%${filter}%`);
        }
      })
      .modify(qb => {
        if (indValidado !== undefined) {
          qb.andWhere('"indValidado"', indValidado ? 1 : 0);
        }
      })
      .offset((page - 1) * limit)
      .limit(limit);

    if (id > 0 && result.every((item: IEstacao) => item.id !== id)) {
      const resultById = await Knex(ETableNames.estacao)
        .select("*", '"fk_Classificacao_id" as idClassificacao')
        .where('id', '=', id)
        .first();
      
      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.error(error);
    return new Error('Erro ao consultar os registros');
  }
};