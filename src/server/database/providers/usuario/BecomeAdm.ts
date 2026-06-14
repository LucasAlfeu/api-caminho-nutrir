import { ETableNames } from "../../ETable"
import { Knex } from "../../knex"

export const becomeAdmById = async (idUsuario: number): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .where('id', '=', idUsuario)
      .update({ indAdm: true });

    if (result > 0) return result;

    return new Error('Usuário não encontrado para atribuição de perfil administrador.');
  } catch (error) {
    console.log(error);
    return new Error(`${error}`);
  }
}