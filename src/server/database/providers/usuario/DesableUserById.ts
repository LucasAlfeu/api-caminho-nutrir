import { ETableNames } from "../../ETable"
import { Knex } from "../../knex"

export const disableUserById = async (idUsuario: number): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .where('id', '=', idUsuario)
      .update({ indLiberado: false, indAdm: false });

    if (result) return result;

    return new Error('Usuário não encontrado para habilitar');
  } catch (error) {
    console.log(error);
    return new Error(`${error}`);
  }
}