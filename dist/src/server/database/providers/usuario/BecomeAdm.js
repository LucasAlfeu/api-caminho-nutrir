"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.becomeAdmById = void 0;
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const becomeAdmById = async (idUsuario) => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .where('id', '=', idUsuario)
            .update({ indAdm: true });
        if (result > 0)
            return result;
        return new Error('Usuário não encontrado para atribuição de perfil administrador.');
    }
    catch (error) {
        console.log(error);
        return new Error(`${error}`);
    }
};
exports.becomeAdmById = becomeAdmById;
//# sourceMappingURL=BecomeAdm.js.map