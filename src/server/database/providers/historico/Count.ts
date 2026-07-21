import { Knex } from "../../knex"
import { ETableNames } from "../../ETable";


export const count = async (filter = ''): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.historico)
      .where('nome', 'like', `%${filter}%`)
      .count<[{ count: string | number }]>('* as count')
      .first();

    if (result) {
      const total = Number(result.count);
      if (!isNaN(total)) return total;
    }

    return new Error('Erro ao consultar a quantidade total de historico');
  } catch (error) {
    console.error(error);
    return new Error('Erro ao consultar a quantidade total de historico');
  }
};