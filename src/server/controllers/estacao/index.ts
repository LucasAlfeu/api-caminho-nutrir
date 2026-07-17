import { create, createValidation } from "./Create"
import { deleteById, deleteByIdValidation } from "./Delete"
import { getAll, getAllValidation } from "./GetAll"
import { getById, getByIdValidation } from "./GetById"
import { update, updateValidation } from "./Update"



export const EstacaoController = {
  create: create,
  createValidation: createValidation,
  getAll: getAll,
  getAllValidation: getAllValidation,
  getById: getById,
  getByIdValidation: getByIdValidation,
  update: update, 
  updateValidation: updateValidation,
  deleteById: deleteById,
  deleteByIdValidation: deleteByIdValidation,
}