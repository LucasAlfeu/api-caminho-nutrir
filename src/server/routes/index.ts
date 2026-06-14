import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { UsuarioController, BancoLeiteController } from "../controllers";
import { ensureAuthenticated } from "../shared/middlewares";

const router = Router()

router.get('/', (_, res) => {
  return res.send('Olá, DEV!')
})

router.get('/usuario', ensureAuthenticated, UsuarioController.getAllValidation , UsuarioController.getAll);
router.get('/usuario/:id', ensureAuthenticated, UsuarioController.getByIdValidation , UsuarioController.getById);
router.put('/usuario/:id', ensureAuthenticated, UsuarioController.updateValidation, UsuarioController.update);
router.delete('/usuario/:id', ensureAuthenticated, UsuarioController.deleteByIdValidation, UsuarioController.deleteById);
router.put('/usuario/:id/liberar-usuario', ensureAuthenticated, UsuarioController.enableUserByIdValidation, UsuarioController.enableUserById);

router.post('/cadastrar', UsuarioController.createValidation , UsuarioController.create);
router.post('/entrar', UsuarioController.singInValidation , UsuarioController.singIn);

router.get('/banco-leite', BancoLeiteController.getAllValidation , BancoLeiteController.getAll);
router.get('/banco-leite/:id', BancoLeiteController.getByIdValidation , BancoLeiteController.getById);
router.post('/banco-leite', ensureAuthenticated, BancoLeiteController.createValidation , BancoLeiteController.create);
router.put('/banco-leite/:id', ensureAuthenticated, BancoLeiteController.updateValidation, BancoLeiteController.update);
router.delete('/banco-leite/:id', ensureAuthenticated, BancoLeiteController.deleteByIdValidation, BancoLeiteController.deleteById);



export { router };