"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const getAll = async (page, limit, filter, id = 0) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .select('id', 'nome', 'matricula', 'indLiberado', 'indAdm')
            .where(qb => {
            if (id > 0) {
                qb.where('id', id)
                    .orWhere('nome', 'like', `%${filter}%`)
                    .orWhere('matricula', 'like', `%${filter}%`);
            }
            else {
                qb.where('nome', 'like', `%${filter}%`)
                    .orWhere('matricula', 'like', `%${filter}%`);
            }
        })
            .offset((page - 1) * limit)
            .limit(limit);
        if (id > 0 && result.every(item => item.id !== id)) {
            const resultById = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
                .select('id', 'nome', 'matricula', 'indLiberado', 'indAdm')
                .where('id', '=', id)
                .first();
            if (resultById)
                return [...result, resultById];
        }
        return result;
    }
    catch (error) {
        console.error(error);
        return new Error('Erro ao consultar os registros');
    }
};
exports.getAll = getAll;
//# sourceMappingURL=GetAll.js.map