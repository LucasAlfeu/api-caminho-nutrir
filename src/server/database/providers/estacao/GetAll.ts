import { Knex } from "../../knex";
import { IEstacao } from "../../models";
import { ETableNames } from "../../ETable";

export const getAll = async (page: number, limit: number, filter: string, id = 0, indValidado?: boolean): Promise<IEstacao[] | Error> => {
  try {
    const query = Knex(ETableNames.estacao)
      .select("*", Knex.raw('"fk_Classificacao_id" as "idClassificacao"'));

    // Filtra por nome apenas se houver texto digitado
    // if (filter && filter.trim() !== '') {
    //   query.where('nome', 'like', `%${filter}%`);
    // }

    // // Filtra pelo status de validação se ele foi enviado na requisição
    // if (indValidado !== undefined) {
    //   query.andWhereRaw('"indValidado" = ?', [indValidado ? 1 : 0]);
    // }

    const result = await query
      .offset((page - 1) * limit)
      .limit(limit);

    return result;
  } catch (error) {
    console.error("ERRO COMPLETO DO KNEX/POSTGRES:", error);
    return error as Error;
  }
};