"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
const ETable_1 = require("../ETable");
async function up(knex) {
    return knex.schema.createTable(ETable_1.ETableNames.bancoLeite, table => {
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
        console.log(`# Create table ${ETable_1.ETableNames.bancoLeite}`);
    });
}
async function down(knex) {
    return knex.schema.dropTable(ETable_1.ETableNames.bancoLeite).then(() => {
        console.log(`# Drop table ${ETable_1.ETableNames.bancoLeite}`);
    });
}
//# sourceMappingURL=0001_create-bancoLeite.js.map