"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllByNomeOuCidade = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const getAllByNomeOuCidade = async (nomeOuCidade) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.estacao)
            .select('*')
            .where('nome', 'like', `%${nomeOuCidade}%`)
            .orWhere('cidade', 'like', `%${nomeOuCidade}%`);
        if (result && result.length > 0)
            return result;
        return new Error('Nenhum registro encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Erro ao buscar os registros');
    }
};
exports.getAllByNomeOuCidade = getAllByNomeOuCidade;
//# sourceMappingURL=Filter.js.map