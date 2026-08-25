"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassificacaoController = void 0;
const Create_1 = require("./Create");
const GetAll_1 = require("./GetAll");
const Update_1 = require("./Update");
const Delete_1 = require("./Delete");
exports.ClassificacaoController = {
    create: Create_1.create,
    createValidation: Create_1.createValidation,
    getAll: GetAll_1.getAll,
    getAllValidation: GetAll_1.getAllValidation,
    update: Update_1.update,
    updateValidation: Update_1.updateValidation,
    deleteById: Delete_1.deleteById,
    deleteByIdValidation: Delete_1.deleteByIdValidation,
};
//# sourceMappingURL=index.js.map