"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const getById = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .select('*')
            .where('id', '=', id)
            .first();
        if (result)
            return result;
        return new Error('Registro não encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Registro não encontrado');
    }
};
exports.getById = getById;
//# sourceMappingURL=GetById.js.map