"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacaoController = void 0;
const Create_1 = require("./Create");
const CreateRequest_1 = require("./CreateRequest");
const Delete_1 = require("./Delete");
const GetAll_1 = require("./GetAll");
const GetById_1 = require("./GetById");
const Update_1 = require("./Update");
const ValidateRequestById_1 = require("./ValidateRequestById");
exports.EstacaoController = {
    create: Create_1.create,
    createValidation: Create_1.createValidation,
    getAll: GetAll_1.getAll,
    getAllValidation: GetAll_1.getAllValidation,
    getById: GetById_1.getById,
    getByIdValidation: GetById_1.getByIdValidation,
    update: Update_1.update,
    updateValidation: Update_1.updateValidation,
    deleteById: Delete_1.deleteById,
    deleteByIdValidation: Delete_1.deleteByIdValidation,
    createRequest: CreateRequest_1.createRequest,
    createRequestValidation: CreateRequest_1.createRequestValidation,
    validadeRequestByIdValidation: ValidateRequestById_1.validadeRequestByIdValidation,
    validadeRequestById: ValidateRequestById_1.validadeRequestById
};
//# sourceMappingURL=index.js.map