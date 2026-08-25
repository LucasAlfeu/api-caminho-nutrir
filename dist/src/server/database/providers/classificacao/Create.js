"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const create = async (classificacao) => {
    try {
        const [result] = await (0, knex_1.Knex)(ETable_1.ETableNames.classificacao).insert(classificacao).returning('id');
        if (typeof result === 'object') {
            return result.id;
        }
        else if (typeof result === 'number') {
            return result;
        }
        return new Error("erro ao cadastrar uma classificação para os bancos de leite");
    }
    catch (error) {
        console.error(error);
        return new Error('Erro ao cadastrar uma classificação para os bancos de leite!');
    }
};
exports.create = create;
//# sourceMappingURL=Create.js.map