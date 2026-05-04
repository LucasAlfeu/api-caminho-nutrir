import type { Knex } from "knex";
import { ETableNames } from "../ETable";


export async function up(knex: Knex) {
  return knex.schema.createTable(ETableNames.usuario, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome', 20).checkLength('<=', 20).index().notNullable();
    table.string('usuario').index().notNullable();
    table.string('email').index().notNullable();
    table.string('senha').index().notNullable();
    table.string('matricula').index().notNullable();
  })

  .then(() => {
    console.log(`# Create table ${ETableNames.usuario}`)
  })
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.usuario)
  .then(() => {
    console.log(`# Create table ${ETableNames.usuario}`)
  });
}

