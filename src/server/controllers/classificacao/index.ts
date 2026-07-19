import { create, createValidation } from "./Create"
import { getAll, getAllValidation } from "./GetAll"
import { update, updateValidation} from './Update'
import { deleteById, deleteByIdValidation} from './Delete'


export const ClassificacaoController = {
  create: create,
  createValidation: createValidation,
  getAll: getAll,
  getAllValidation: getAllValidation,
  update: update, 
  updateValidation: updateValidation,
  deleteById: deleteById,
  deleteByIdValidation: deleteByIdValidation,
}