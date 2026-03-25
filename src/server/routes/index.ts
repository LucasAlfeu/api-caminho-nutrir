import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { UsuarioController, BancoLeiteController } from "../controllers/index.js";

const router = Router()

router.get('/', (_, res) => {
  return res.send('Olá, DEV!')
})

router.post('/usuario', UsuarioController.create);

export { router };