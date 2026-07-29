import { ETableNames } from "../../ETable"
import { Knex } from "../../knex"

export const validadeRequestById = async (idEstacao: number): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.estacao)
      .where('id', '=', idEstacao)
      .update({ indValidado: true });

    if (result > 0) return result;

    return new Error('Estação não encontrada para habilitar');
  } catch (error) {
    console.log(error);
    return new Error(`${error}`);
  }
}