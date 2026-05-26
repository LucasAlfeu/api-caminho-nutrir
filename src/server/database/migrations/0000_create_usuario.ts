import type { Knex } from "knex";
import { ETableNames } from "../ETable";


export async function up(knex: Knex) {
  return knex.schema.createTable(ETableNames.usuario, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome').checkLength('>', 3).notNullable();
    table.string('usuario').checkLength('>', 6).index().unique().notNullable();
    table.string('email').unique().index().notNullable();
    table.string('senha').notNullable();
    table.string('matricula').unique().index().notNullable();
  })

  .then(() => {
    console.log(`# Create table ${ETableNames.usuario}`)
  })
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.usuario)
  .then(() => {
    console.log(`# Drop table ${ETableNames.usuario}`)
  });
}

