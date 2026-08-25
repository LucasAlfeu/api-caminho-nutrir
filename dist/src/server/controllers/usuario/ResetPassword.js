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
exports.resetPassword = exports.resetPasswordValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const yup = __importStar(require("yup"));
const Validation_1 = require("../../shared/middlewares/Validation");
const usuario_1 = require("../../database/providers/usuario");
exports.resetPasswordValidation = (0, Validation_1.validation)((getSchema) => ({
    body: getSchema(yup.object({
        usuario: yup.string().required(),
        novaSenha: yup.string().required().min(6),
        email: yup.string().email().required(),
        matricula: yup.string().required(),
    }))
}));
const resetPassword = async (req, res) => {
    if (!req.body.email) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O "email" precisa ser informado'
            }
        });
    }
    if (!req.body.matricula) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'A "matricula" precisa ser informada'
            }
        });
    }
    if (!req.body.usuario) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O "usuário" precisa ser informado'
            }
        });
    }
    if (!req.body.novaSenha) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'A "nova senha" precisa ser informada'
            }
        });
    }
    const result = await usuario_1.UsuarioProvider.resetPassword(req.body.usuario, req.body.email, req.body.matricula, req.body.novaSenha);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }
    return res.status(http_status_codes_1.StatusCodes.OK).json(result);
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=ResetPassword.js.map