"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const Create_1 = require("./Create");
const GetAll_1 = require("./GetAll");
const GetById_1 = require("./GetById");
const Update_1 = require("./Update");
const Delete_1 = require("./Delete");
const SingIn_1 = require("./SingIn");
const EnableUserById_1 = require("./EnableUserById");
const BecomeAdm_1 = require("./BecomeAdm");
const DisableUserById_1 = require("./DisableUserById");
const ResetPassword_1 = require("./ResetPassword");
exports.UsuarioController = {
    create: Create_1.create,
    createValidation: Create_1.createValidation,
    singIn: SingIn_1.singIn,
    singInValidation: SingIn_1.singInValidation,
    getAll: GetAll_1.getAll,
    getAllValidation: GetAll_1.getAllValidation,
    getById: GetById_1.getById,
    getByIdValidation: GetById_1.getByIdValidation,
    update: Update_1.update,
    updateValidation: Update_1.updateValidation,
    deleteById: Delete_1.deleteById,
    deleteByIdValidation: Delete_1.deleteByIdValidation,
    enableUserById: EnableUserById_1.enableUserById,
    enableUserByIdValidation: EnableUserById_1.enableUserByIdValidation,
    becomeAdmById: BecomeAdm_1.becomeAdmById,
    becomeAdmByIdValidation: BecomeAdm_1.becomeAdmByIdValidation,
    disableUserById: DisableUserById_1.disableUserById,
    disableUserByIdValidation: DisableUserById_1.disableUserByIdValidation,
    resetPassword: ResetPassword_1.resetPassword,
    resetPasswordValidation: ResetPassword_1.resetPasswordValidation,
};
//# sourceMappingURL=index.js.map