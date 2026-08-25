"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
// database/providers/estacao/getById.ts (ou onde estiver seu provider)
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const getById = async (id) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.estacao)
            .select('*')
            .where('id', '=', id)
            .first();
        if (result) {
            const { fk_Classificacao_id, ...restoDoBanco } = result;
            return {
                ...restoDoBanco,
                idClassificacao: fk_Classificacao_id // Transformando para a sua interface
            };
        }
        return new Error('Registro não encontrado');
    }
    catch (error) {
        console.log(error);
        return new Error('Registro não encontrado');
    }
};
exports.getById = getById;
//# sourceMappingURL=GetById.js.map