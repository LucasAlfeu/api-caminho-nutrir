import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { UsuarioController, BancoLeiteController } from "../controllers/index.js";
const router = Router();
router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
});
router.get('/usuario', UsuarioController.getAllValidation, UsuarioController.getAll);
router.get('/usuario/:id', UsuarioController.getByIdValidation, UsuarioController.getById);
router.post('/usuario', UsuarioController.createValidation, UsuarioController.create);
router.put('/usuario/:id', UsuarioController.updateValidation, UsuarioController.update);
router.delete('/usuario/:id', UsuarioController.deleteByIdValidation, UsuarioController.deleteById);
export { router };
//# sourceMappingURL=index.js.map