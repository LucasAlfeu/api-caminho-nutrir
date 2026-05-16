import { Knex } from "knex";
import { ETableNames } from "../ETable";
import { number } from "yup";

export const seed = async (knex: Knex) => {
  const [{ count } = { count: 0 }] = await knex(ETableNames.usuario).count<[{ count: number}]>('* as count');

  if(!Number.isInteger(count) || Number(count) > 0) return;


  const usuariosToInsert = []
  // função para ler um arquivo e adicionar dentro do array

  // await knex(ETableNames.usuario).insert(usuariosToInsert) Para não dar erro pois o vetor está vazio

  // para testar no packege.json tem um comando específico para isso
}