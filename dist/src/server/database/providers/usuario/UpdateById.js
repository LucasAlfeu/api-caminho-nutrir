"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = void 0;
const service_1 = require("../../../shared/service"); // Certifique-se de que o caminho do import está correto
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
const updateById = async (id, usuario) => {
    try {
        const dadosParaAtualizar = Object.fromEntries(Object.entries(usuario).filter(([_, value]) => value !== "" && value !== null && value !== undefined));
        if (dadosParaAtualizar.senha) {
            dadosParaAtualizar.senha = await service_1.PasswordCrypto.hasPassword(dadosParaAtualizar.senha);
        }
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .update(dadosParaAtualizar)
            .where('id', '=', id);
        if (result > 0) {
            const usuarioAtualizado = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
                .select('*')
                .where('id', '=', id)
                .first();
            if (usuarioAtualizado) {
                delete usuarioAtualizado.senha;
                return usuarioAtualizado;
            }
        }
        return new Error("Erro ao atualizar o registro");
    }
    catch (error) {
        console.log(error);
        return new Error("Erro ao atualizar o registro");
    }
};
exports.updateById = updateById;
//# sourceMappingURL=UpdateById.js.map