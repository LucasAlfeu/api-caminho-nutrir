import { create, createValidation } from "./Create.js"
import { getAll, getAllValidation } from "./GetAll.js"


export const UsuarioController = {
  create: create,
  createValidation: createValidation,
  getAll: getAll,
  getAllValidation: getAllValidation,
}