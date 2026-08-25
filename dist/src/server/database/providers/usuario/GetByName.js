"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllByNome = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const getAllByNome = async (nome) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .select('*')
            .where('nome', 'like', `%${nome}%`);
        if (result && result.length > 0)
            return result;
        return new Error('Nenhum registro encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao buscar os registros');
    }
};
exports.getAllByNome = getAllByNome;
//# sourceMappingURL=GetByName.js.map