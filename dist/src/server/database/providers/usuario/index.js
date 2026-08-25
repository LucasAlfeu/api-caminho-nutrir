"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioProvider = void 0;
const Create_1 = require("./Create");
const GetAll_1 = require("./GetAll");
const GetById_1 = require("./GetById");
const DeleteById_1 = require("./DeleteById");
const UpdateById_1 = require("./UpdateById");
const Count_1 = require("./Count");
const GetByUsuario_1 = require("./GetByUsuario");
const EnableUserById_1 = require("./EnableUserById");
const BecomeAdm_1 = require("./BecomeAdm");
const DesableUserById_1 = require("./DesableUserById");
const ResetPassword_1 = require("./ResetPassword");
exports.UsuarioProvider = {
    create: Create_1.create,
    getAll: GetAll_1.getAll,
    getById: GetById_1.getById,
    getByUsuario: GetByUsuario_1.getByUsuario,
    updateById: UpdateById_1.updateById,
    deleteById: DeleteById_1.deleteById,
    count: Count_1.count,
    enableUserById: EnableUserById_1.enableUserById,
    becomeAdmById: BecomeAdm_1.becomeAdmById,
    disableUserById: DesableUserById_1.disableUserById,
    resetPassword: ResetPassword_1.resetPassword,
};
//# sourceMappingURL=index.js.map