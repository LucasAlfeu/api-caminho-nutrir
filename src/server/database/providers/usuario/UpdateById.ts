import { PasswordCrypto } from "../../../shared/service"; // Certifique-se de que o caminho do import está correto
import { Knex } from "../../knex";
import { IUsuario } from "../../models";
import { ETableNames } from "../../ETable";

export const updateById = async (id: number, usuario: Partial<Omit<IUsuario, 'id'>>): Promise<IUsuario | Error> => {
  try {
    const dadosParaAtualizar = Object.fromEntries(
      Object.entries(usuario).filter(([_, value]) => value !== "" && value !== null && value !== undefined)
    ) as any; 
    
    if (dadosParaAtualizar.senha) {
      dadosParaAtualizar.senha = await PasswordCrypto.hasPassword(dadosParaAtualizar.senha);
    }

    const result = await Knex(ETableNames.usuario)
      .update(dadosParaAtualizar) 
      .where('id', '=', id);

    if (result > 0) {
      const usuarioAtualizado = await Knex(ETableNames.usuario)
        .select('*') 
        .where('id', '=', id)
        .first();

      if (usuarioAtualizado) {
        delete (usuarioAtualizado as any).senha; 
        return usuarioAtualizado;
      }
    }

    return new Error("Erro ao atualizar o registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao atualizar o registro");
  }
};