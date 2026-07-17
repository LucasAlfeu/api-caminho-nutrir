import { count } from "./Count";
import { create } from "./Create";
import { deleteById } from "./DeleteById";
import { getAll } from "./GetAll";
import { getById } from "./GetById";
import { updateById } from "./UpdateById";


export const EstacaoProvider = {
  create: create,
    getAll: getAll,
    getById: getById,
    updateById: updateById, 
    deleteById: deleteById,
    count: count
}