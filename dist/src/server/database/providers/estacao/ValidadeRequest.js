"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validadeRequestById = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const validadeRequestById = async (idEstacao) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.estacao)
            .where('id', '=', idEstacao)
            .update({ indValidado: true });
        if (result > 0)
            return result;
        return new Error('Estação não encontrada para habilitar');
    }
    catch (error) {
        console.log(error);
        return new Error(`${error}`);
    }
};
exports.validadeRequestById = validadeRequestById;
//# sourceMappingURL=ValidadeRequest.js.map