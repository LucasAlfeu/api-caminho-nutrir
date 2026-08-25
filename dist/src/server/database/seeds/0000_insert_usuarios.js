"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const ETable_1 = require("../ETable");
const seed = async (knex) => {
    const [{ count } = { count: 0 }] = await knex(ETable_1.ETableNames.usuario).count('* as count');
    if (!Number.isInteger(count) || Number(count) > 0)
        return;
    const usuariosToInsert = [];
    // função para ler um arquivo e adicionar dentro do array
    // await knex(ETableNames.usuario).insert(usuariosToInsert) Para não dar erro pois o vetor está vazio
    // para testar no packege.json tem um comando específico para isso
};
exports.seed = seed;
//# sourceMappingURL=0000_insert_usuarios.js.map