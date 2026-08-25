"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const deleteById = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.estacao)
            .where('id', '=', id)
            .del();
        if (result > 0)
            return;
        return new Error('Erro ao apagar o registro');
    }
    catch (error) {
        console.error(error);
        return new Error('Erro ao apagar o registro');
    }
};
exports.deleteById = deleteById;
//# sourceMappingURL=DeleteById.js.map