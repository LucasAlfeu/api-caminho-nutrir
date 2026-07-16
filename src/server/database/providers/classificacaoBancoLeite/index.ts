import { create } from "./Create";
import { deleteById } from "./DeleteById";
import { getAll } from "./GetAll";
import { updateById } from "./UpdateById";



export const classificacaoBancoLeite = {
  create: create,
  getAll: getAll,
  updateById: updateById,
  deleteById: deleteById
}