import { Knex } from "knex";
import { ETableNames } from "../ETable";
import { Schema } from "yup";


export async function up(knex:Knex) {
  return knex.schema.createTable(ETableNames.bancoLeite, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome').index().notNullable();
    table.string('descricao').checkLength('<=', 300).index().notNullable();
    table.string('cep').checkLength('=', 8).index().notNullable();
    table.string('logradouro').index().notNullable();
    table.string('bairro').index().notNullable();
    table.string('numero').index().notNullable();
    table.string('complemento').index().nullable;
    table.string('municipio').index().notNullable();
    table.string('uf').index().notNullable();
    table.string('longitude').index().notNullable();
    table.string('latitude').index().notNullable();
  }).then(() => {
    console.log(`# Create table ${ETableNames.bancoLeite}`)
  })
}

export async function down(knex:Knex){
  return knex.schema.dropTable(ETableNames.bancoLeite).then(() => {
    console.log(`# Drop table ${ETableNames.bancoLeite}`)
  })
}