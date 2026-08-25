"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllByIdEstacao = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const getAllByIdEstacao = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.historico)
            .select('id', 'data', 'descricao', 'nomeUsuario', 'emailUsuario')
            .where('fk_Estacao_id', '=', id)
            .orderBy('data', 'desc');
        if (result)
            return result;
        return new Error('Registro não encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Registro não encontrado');
    }
};
exports.getAllByIdEstacao = getAllByIdEstacao;
//# sourceMappingURL=GetAllByIdEstacao.js.map