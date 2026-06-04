import { PasswordCrypto } from "../../../shared/service";
import { ETableNames } from "../../ETable";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const create = async (usuario: Omit<IUsuario, 'id'>): Promise<number | Error> => {
  try {
    const hashedPassword = await PasswordCrypto.hasPassword(usuario.senha);
    const [result] = await Knex(ETableNames.usuario).insert({...usuario, senha: hashedPassword}).returning('id');

    if(typeof result === 'object') {
      return result.id
    } else if (typeof result === 'number'){
      return result;
    }

    return new Error("erro ao cadastrar o registro")
  } catch (error){
    console.error(error)
    return new Error('Erro ao cadastrar o registro!');
  }
  
}