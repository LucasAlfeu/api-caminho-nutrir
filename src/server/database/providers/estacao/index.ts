import { count } from "./Count";
import { create } from "./Create";
import { createRequest } from "./CreateRequest";
import { deleteById } from "./DeleteById";
import { getAll } from "./GetAll";
import { getById } from "./GetById";
import { updateById } from "./UpdateById";
import { validadeRequestById } from "./ValidadeRequest";


export const EstacaoProvider = {
  create: create,
    getAll: getAll,
    getById: getById,
    updateById: updateById, 
    deleteById: deleteById,
    count: count,
    createRequest: createRequest,
    validadeRequestById: validadeRequestById
}