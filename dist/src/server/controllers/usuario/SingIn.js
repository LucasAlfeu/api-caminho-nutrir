"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.singIn = exports.singInValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const yup = __importStar(require("yup"));
const Validation_1 = require("../../shared/middlewares/Validation");
const usuario_1 = require("../../database/providers/usuario");
const service_1 = require("../../shared/service");
exports.singInValidation = (0, Validation_1.validation)((getSchema) => ({
    body: getSchema(yup.object({
        usuario: yup.string().required(),
        senha: yup.string().required().min(6),
    }))
}));
const singIn = async (req, res) => {
    const { usuario, senha } = req.body;
    const result = await usuario_1.UsuarioProvider.getByUsuario(usuario);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Usuário ou senha inválidos'
            }
        });
    }
    const passwordMatch = await service_1.PasswordCrypto.verifyPassword(senha, result.senha);
    if (!passwordMatch) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Usuário ou senha inválidos'
            }
        });
    }
    else {
        const accessToken = service_1.JWTService.sign({ uid: result.id });
        if (accessToken === 'JWT_SECRET_NOT_FOUND') {
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                    default: 'Erro ao gerar o token de acesso'
                }
            });
        }
        return res.status(http_status_codes_1.StatusCodes.OK).json({
            accessToken: accessToken,
            email: result.email,
            id: result.id,
            usuario: result.usuario,
            nome: result.nome,
            matricula: result.matricula,
            indAdm: result.indAdm,
            indLiberado: result.indLiberado,
        });
    }
};
exports.singIn = singIn;
//# sourceMappingURL=SingIn.js.map