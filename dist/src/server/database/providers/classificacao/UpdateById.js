"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const updateById = async (id, classificacao) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.classificacao)
            .update(classificacao)
            .where('id', '=', id);
        if (result > 0)
            return;
        return new Error("Erro ao atualizar a classiicação dos bancos de leite");
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao atualizar a classiicação dos bancos de leite");
    }
};
exports.updateById = updateById;
//# sourceMappingURL=UpdateById.js.map