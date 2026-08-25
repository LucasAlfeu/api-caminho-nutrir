"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const service_1 = require("../../../shared/service");
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const create = async (usuario) => {
    try {
        const hashedPassword = await service_1.PasswordCrypto.hasPassword(usuario.senha);
        const [result] = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario).insert({ ...usuario, senha: hashedPassword }).returning('id');
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
exports.create = create;
//# sourceMappingURL=Create.js.map