import { Knex } from "../../knex"
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETable";

type TUsuarioListagem = Omit<IUsuario, 'usuario' | 'senha' | 'email'>;

export const getAll = async (page: number, limit: number, filter: string, id = 0): Promise<TUsuarioListagem[] | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select<TUsuarioListagem[]>('id', 'nome', 'matricula', 'indLiberado', 'indAdm')
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
      const resultById = await Knex(ETableNames.usuario)
        .select<TUsuarioListagem>('id', 'nome', 'matricula', 'indLiberado', 'indAdm')
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