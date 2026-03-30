import { create, createValidation } from "./Create"
import { getAll, getAllValidation } from "./GetAll"
import { getById, getByIdValidation} from './GetById'
import { update, updateValidation} from './Update'
import { deleteById, deleteByIdValidation} from './Delete'


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