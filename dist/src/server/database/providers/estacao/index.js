"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstacaoProvider = void 0;
const Count_1 = require("./Count");
const Create_1 = require("./Create");
const CreateRequest_1 = require("./CreateRequest");
const DeleteById_1 = require("./DeleteById");
const GetAll_1 = require("./GetAll");
const GetById_1 = require("./GetById");
const UpdateById_1 = require("./UpdateById");
const ValidadeRequest_1 = require("./ValidadeRequest");
exports.EstacaoProvider = {
    create: Create_1.create,
    getAll: GetAll_1.getAll,
    getById: GetById_1.getById,
    updateById: UpdateById_1.updateById,
    deleteById: DeleteById_1.deleteById,
    count: Count_1.count,
    createRequest: CreateRequest_1.createRequest,
    validadeRequestById: ValidadeRequest_1.validadeRequestById
};
//# sourceMappingURL=index.js.map