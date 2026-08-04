import { create, createValidation } from "./Create";
import { deleteById, deleteByIdValidation } from "./Delete";



export const ReporteController = {
  create: create,
  createValidation: createValidation,
  deleteById: deleteById,
  deleteByIdValidation: deleteByIdValidation
}