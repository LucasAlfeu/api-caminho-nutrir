import { create, createValidation } from "./Create"
import { getAll, getAllValidation } from "./GetAll"
import { getById, getByIdValidation} from './GetById'
import { update, updateValidation} from './Update'
import { deleteById, deleteByIdValidation} from './Delete'
import { singIn, singInValidation } from "./SingIn"
import { enableUserById, enableUserByIdValidation } from "./EnableUserById"
import { becomeAdmById, becomeAdmByIdValidation } from "./BecomeAdm"
import { disableUserById, disableUserByIdValidation } from "./DisableUserById"
import { resetPassword, resetPasswordValidation } from "./ResetPassword"


export const UsuarioController = {
  create: create,
  createValidation: createValidation,
  singIn: singIn,
  singInValidation: singInValidation,
  getAll: getAll,
  getAllValidation: getAllValidation,
  getById: getById,
  getByIdValidation: getByIdValidation,
  update: update, 
  updateValidation: updateValidation,
  deleteById: deleteById,
  deleteByIdValidation: deleteByIdValidation,
  enableUserById: enableUserById,
  enableUserByIdValidation: enableUserByIdValidation,
  becomeAdmById: becomeAdmById,
  becomeAdmByIdValidation: becomeAdmByIdValidation,
  disableUserById: disableUserById,
  disableUserByIdValidation: disableUserByIdValidation,
  resetPassword: resetPassword,
  resetPasswordValidation: resetPasswordValidation,
}