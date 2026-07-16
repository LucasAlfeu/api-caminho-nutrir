import { ETableNames } from "../../ETable"
import { Knex } from "../../knex"


export const deleteById = async(id: number): Promise<void | Error> => {
  try{
    const result = await Knex(ETableNames.classificacaoBancoLeite)
      .where('id', '=', id)
      .del()
    
    if (result > 0) return;
    
    return new Error('Erro ao apagar a classificação dos bancos de leite')
  } catch (error) {
    console.error(error)
    return new Error('Erro ao apagar a classificação dos bancos de leite')
  }
}