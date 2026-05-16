import { updateValidation } from "../usuario/Update"
import { create, createValidation } from "./Create"
import { deleteById, deleteByIdValidation } from "./Delete"
import { getAll, getAllValidation } from "./GetAll"
import { getById, getByIdValidation } from "./GetById"
import { update } from "./Update"



export const BancoLeiteController = {
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