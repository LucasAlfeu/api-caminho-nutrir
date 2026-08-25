"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllById = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const getAllById = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.reporte)
            .select('id', 'relato')
            .where('fk_Estacao_id', '=', id);
        if (result)
            return result;
        return new Error('Registro não encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Registro não encontrado');
    }
};
exports.getAllById = getAllById;
//# sourceMappingURL=GetAllById.js.map