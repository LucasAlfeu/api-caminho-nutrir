"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const createRequest = async (bancoLeite) => {
    try {
        const [result] = await (0, knex_1.Knex)(ETable_1.ETableNames.estacao).insert(bancoLeite).returning('id');
        if (typeof result === 'object') {
            return result.id;
        }
        else if (typeof result === 'number') {
            return result;
        }
        return new Error("erro ao cadastrar o registro");
    }
    catch (error) {
        console.error(error);
        return new Error('Erro ao cadastrar o registro!');
    }
};
exports.createRequest = createRequest;
//# sourceMappingURL=CreateRequest.js.map