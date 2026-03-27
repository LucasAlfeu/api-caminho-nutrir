import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { UsuarioController, BancoLeiteController } from "../controllers/index.js";

const router = Router()

router.get('/', (_, res) => {
  return res.send('Olá, DEV!')
})

router.get('/usuario', UsuarioController.getAllValidation , UsuarioController.getAll);
router.post('/usuario', UsuarioController.createValidation , UsuarioController.create);

export { router };