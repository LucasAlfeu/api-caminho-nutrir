"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../shared/middlewares");
const indext_1 = require("../controllers/reporte/indext");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
});
// URL referente ao usuário
router.get('/usuario', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.getAllValidation, controllers_1.UsuarioController.getAll);
router.get('/usuario/:id', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.getByIdValidation, controllers_1.UsuarioController.getById);
router.put('/usuario/:id/habilitar', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.enableUserByIdValidation, controllers_1.UsuarioController.enableUserById);
router.put('/usuario/:id/desabilitar', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.disableUserByIdValidation, controllers_1.UsuarioController.disableUserById);
router.put('/usuario/:id/tornar-administrador', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.becomeAdmByIdValidation, controllers_1.UsuarioController.becomeAdmById);
router.put('/usuario/:id', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.updateValidation, controllers_1.UsuarioController.update);
router.delete('/usuario/:id', middlewares_1.ensureAuthenticated, controllers_1.UsuarioController.deleteByIdValidation, controllers_1.UsuarioController.deleteById);
// URL referente as credenciais do usuário
router.post('/cadastrar', controllers_1.UsuarioController.createValidation, controllers_1.UsuarioController.create);
router.post('/entrar', controllers_1.UsuarioController.singInValidation, controllers_1.UsuarioController.singIn);
router.put('/recuperar-senha', controllers_1.UsuarioController.resetPasswordValidation, controllers_1.UsuarioController.resetPassword);
// URL referente as estações
router.get('/banco-leite', controllers_1.EstacaoController.getAllValidation, controllers_1.EstacaoController.getAll);
router.get('/banco-leite/:id', controllers_1.EstacaoController.getByIdValidation, controllers_1.EstacaoController.getById);
router.post('/banco-leite', middlewares_1.ensureAuthenticated, controllers_1.EstacaoController.createValidation, controllers_1.EstacaoController.create);
router.put('/banco-leite/:id', middlewares_1.ensureAuthenticated, controllers_1.EstacaoController.updateValidation, controllers_1.EstacaoController.update);
router.delete('/banco-leite/:id', middlewares_1.ensureAuthenticated, controllers_1.EstacaoController.deleteByIdValidation, controllers_1.EstacaoController.deleteById);
router.post('/solicitar-banco-leite', controllers_1.EstacaoController.createRequestValidation, controllers_1.EstacaoController.createRequest);
router.put('/solicitar-banco-leite/:id', middlewares_1.ensureAuthenticated, controllers_1.EstacaoController.validadeRequestByIdValidation, controllers_1.EstacaoController.validadeRequestById);
// URL refernte a classificação
router.get('/classificacao', controllers_1.ClassificacaoController.getAllValidation, controllers_1.ClassificacaoController.getAll);
router.post('/classificacao', middlewares_1.ensureAuthenticated, controllers_1.ClassificacaoController.createValidation, controllers_1.ClassificacaoController.create);
router.put('/classificacao/:id', middlewares_1.ensureAuthenticated, controllers_1.ClassificacaoController.updateValidation, controllers_1.ClassificacaoController.update);
router.delete('/classificacao/:id', middlewares_1.ensureAuthenticated, controllers_1.ClassificacaoController.deleteByIdValidation, controllers_1.ClassificacaoController.deleteById);
// URL referente aos reportes
router.post('/reporte', indext_1.ReporteController.createValidation, indext_1.ReporteController.create);
router.delete('/reporte/:id', middlewares_1.ensureAuthenticated, indext_1.ReporteController.deleteByIdValidation, indext_1.ReporteController.deleteById);
//# sourceMappingURL=index.js.map