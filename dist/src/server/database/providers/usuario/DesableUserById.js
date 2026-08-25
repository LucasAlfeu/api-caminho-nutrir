"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableUserById = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const disableUserById = async (idUsuario) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .where('id', '=', idUsuario)
            .update({ indLiberado: false, indAdm: false });
        if (result)
            return result;
        return new Error('Usuário não encontrado para habilitar');
    }
    catch (error) {
        console.log(error);
        return new Error(`${error}`);
    }
};
exports.disableUserById = disableUserById;
//# sourceMappingURL=DesableUserById.js.map