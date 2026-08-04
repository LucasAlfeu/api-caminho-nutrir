import { Router } from "express";
import { UsuarioController, EstacaoController, ClassificacaoController } from "../controllers";
import { ensureAuthenticated } from "../shared/middlewares";
import { ReporteController } from "../controllers/reporte/indext";

const router = Router()

router.get('/', (_, res) => {
  return res.send('Olá, DEV!')
})

// URL referente ao usuário

router.get('/usuario', ensureAuthenticated, UsuarioController.getAllValidation , UsuarioController.getAll);
router.get('/usuario/:id', ensureAuthenticated, UsuarioController.getByIdValidation , UsuarioController.getById);
router.put('/usuario/:id/habilitar', ensureAuthenticated, UsuarioController.enableUserByIdValidation, UsuarioController.enableUserById);
router.put('/usuario/:id/desabilitar', ensureAuthenticated, UsuarioController.disableUserByIdValidation, UsuarioController.disableUserById);
router.put('/usuario/:id/tornar-administrador', ensureAuthenticated, UsuarioController.becomeAdmByIdValidation, UsuarioController.becomeAdmById);
router.put('/usuario/:id', ensureAuthenticated, UsuarioController.updateValidation, UsuarioController.update);
router.delete('/usuario/:id', ensureAuthenticated, UsuarioController.deleteByIdValidation, UsuarioController.deleteById);

// URL referente as credenciais do usuário

router.post('/cadastrar', UsuarioController.createValidation , UsuarioController.create);
router.post('/entrar', UsuarioController.singInValidation , UsuarioController.singIn);
router.put('/recuperar-senha', UsuarioController.resetPasswordValidation , UsuarioController.resetPassword);

// URL referente as estações

router.get('/banco-leite', EstacaoController.getAllValidation , EstacaoController.getAll);
router.get('/banco-leite/:id', EstacaoController.getByIdValidation , EstacaoController.getById);
router.post('/banco-leite', ensureAuthenticated, EstacaoController.createValidation , EstacaoController.create);
router.put('/banco-leite/:id', ensureAuthenticated, EstacaoController.updateValidation, EstacaoController.update);
router.delete('/banco-leite/:id', ensureAuthenticated, EstacaoController.deleteByIdValidation, EstacaoController.deleteById);

router.post('/solicitar-banco-leite', EstacaoController.createRequestValidation , EstacaoController.createRequest);
router.put('/solicitar-banco-leite/:id', ensureAuthenticated, EstacaoController.validadeRequestByIdValidation , EstacaoController.validadeRequestById);

// URL refernte a classificação

router.get('/classificacao', ClassificacaoController.getAllValidation , ClassificacaoController.getAll);
router.post('/classificacao', ensureAuthenticated, ClassificacaoController.createValidation, ClassificacaoController.create)
router.put('/classificacao/:id', ensureAuthenticated, ClassificacaoController.updateValidation, ClassificacaoController.update);
router.delete('/classificacao/:id', ensureAuthenticated, ClassificacaoController.deleteByIdValidation, ClassificacaoController.deleteById);

// URL referente aos reportes

router.post('/reporte',  ReporteController.createValidation, ReporteController.create );
router.delete('/reporte/:id', ReporteController.deleteByIdValidation, ReporteController.deleteById);

export { router };