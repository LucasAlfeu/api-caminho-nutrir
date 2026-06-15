import { PasswordCrypto } from "../../../shared/service/PasswordCrypto";
import { ETableNames } from "../../ETable"
import { Knex } from "../../knex"

export const resetPassword = async (usuario: string, email: string, matricula: string, novaSenha: string): Promise<number | Error> => {
  try {
    const hashedPassword = await PasswordCrypto.hasPassword(novaSenha);
    const result = await Knex(ETableNames.usuario)
      .where('email', '=', email)
      .andWhere('matricula', '=', matricula)
      .andWhere('usuario', '=', usuario)
      .update({ senha: hashedPassword });

    if (result) return result;

    return new Error('Usuário não encontrado, não foi possível atlterar a senha');
  } catch (error) {
    return new Error(`${error}`);
  }
}