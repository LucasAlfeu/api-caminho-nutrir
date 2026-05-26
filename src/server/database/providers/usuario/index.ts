import { create } from "./Create"
import { getAll } from "./GetAll"
import { getById } from './GetById'
import { deleteById } from './DeleteById'
import { updateById } from "./UpdateById"
import { count } from "./Count"
import { getByUsuario } from "./GetByUsuario"


export const UsuarioProvider = {
  create: create,
  getAll: getAll,
  getById: getById,
  getByUsuario: getByUsuario,
  updateById: updateById, 
  deleteById: deleteById,
  count: count
}