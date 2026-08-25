"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const PasswordCrypto_1 = require("../../../shared/service/PasswordCrypto");
const ETable_1 = require("../../ETable");
const knex_1 = require("../../knex");
const resetPassword = async (usuario, email, matricula, novaSenha) => {
    try {
        const hashedPassword = await PasswordCrypto_1.PasswordCrypto.hasPassword(novaSenha);
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .where('email', '=', email)
            .andWhere('matricula', '=', matricula)
            .andWhere('usuario', '=', usuario)
            .update({ senha: hashedPassword });
        if (result)
            return result;
        return new Error('Usuário não encontrado, não foi possível atlterar a senha');
    }
    catch (error) {
        return new Error(`${error}`);
    }
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=ResetPassword.js.map