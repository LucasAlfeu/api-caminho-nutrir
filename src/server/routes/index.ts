import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { UsuarioController, BancoLeiteController } from "../controllers";

const router = Router()

router.get('/', (_, res) => {
  return res.send('Olá, DEV!')
})

router.get('/usuario', UsuarioController.getAllValidation , UsuarioController.getAll);
router.get('/usuario/:id', UsuarioController.getByIdValidation , UsuarioController.getById);
router.put('/usuario/:id', UsuarioController.updateValidation, UsuarioController.update);
router.delete('/usuario/:id', UsuarioController.deleteByIdValidation, UsuarioController.deleteById);

router.post('/cadastrar', UsuarioController.createValidation , UsuarioController.create);
router.post('/entrar', UsuarioController.singInValidation , UsuarioController.singIn);

router.get('/banco-leite', BancoLeiteController.getAllValidation , BancoLeiteController.getAll);
router.get('/banco-leite/:id', BancoLeiteController.getByIdValidation , BancoLeiteController.getById);
router.post('/banco-leite', BancoLeiteController.createValidation , BancoLeiteController.create);
router.put('/banco-leite/:id', BancoLeiteController.updateValidation, BancoLeiteController.update);
router.delete('/banco-leite/:id', BancoLeiteController.deleteByIdValidation, BancoLeiteController.deleteById);



export { router };