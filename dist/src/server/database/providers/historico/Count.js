"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const count = async (filter = '') => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.historico)
            .where('nome', 'like', `%${filter}%`)
            .count('* as count')
            .first();
        if (result) {
            const total = Number(result.count);
            if (!isNaN(total))
                return total;
        }
        return new Error('Erro ao consultar a quantidade total de historico');
    }
    catch (error) {
        console.error(error);
        return new Error('Erro ao consultar a quantidade total de historico');
    }
};
exports.count = count;
//# sourceMappingURL=Count.js.map