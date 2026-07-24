import { count } from "./Count";
import { create } from "./Create";
import { deleteById } from "./DeleteById";
import { getAll } from "./GetAll";
import { getById } from "./GetById";
import { updateById } from "./UpdateById";



export const ClassificacaoProvider = {
  create: create,
  getAll: getAll,
  updateById: updateById,
  deleteById: deleteById,
  count: count,
  getById: getById
}