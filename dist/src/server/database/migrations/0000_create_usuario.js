"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
const ETable_1 = require("../ETable");
async function up(knex) {
    return knex.schema.createTable(ETable_1.ETableNames.usuario, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome').checkLength('>', 3).notNullable();
        table.string('usuario').checkLength('>', 6).index().unique().notNullable();
        table.string('email').unique().index().notNullable();
        table.string('senha').notNullable();
        table.string('matricula').unique().index().notNullable();
    })
        .then(() => {
        console.log(`# Create table ${ETable_1.ETableNames.usuario}`);
    });
}
async function down(knex) {
    return knex.schema.dropTable(ETable_1.ETableNames.usuario)
        .then(() => {
        console.log(`# Drop table ${ETable_1.ETableNames.usuario}`);
    });
}
//# sourceMappingURL=0000_create_usuario.js.map