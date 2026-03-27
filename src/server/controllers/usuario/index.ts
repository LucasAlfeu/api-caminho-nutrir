import { create, createValidation } from "./Create.js"
import { getAll, getAllValidation } from "./GetAll.js"
import { getById, getByIdValidation} from './GetById.js'
import { update, updateValidation} from './Update.js'
import { deleteById, deleteByIdValidation} from './Delete.js'


export const UsuarioController = {
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