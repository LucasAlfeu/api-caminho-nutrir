// database/providers/estacao/getById.ts (ou onde estiver seu provider)
import { Knex } from "../../knex"
import { IEstacao } from "../../models";
import { ETableNames } from "../../ETable";

export const getById = async (id: number): Promise<IEstacao | Error> => {
  try {
    const result = await Knex(ETableNames.estacao)
      .select('*')
      .where('id', '=', id)
      .first();
    
    if(result) {
      const { fk_Classificacao_id, ...restoDoBanco } = result as any;
      
      return {
        ...restoDoBanco,
        idClassificacao: fk_Classificacao_id // Transformando para a sua interface
      };
    }

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Registro não encontrado');
  }
}