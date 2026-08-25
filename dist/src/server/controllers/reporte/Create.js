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
exports.create = exports.createValidation = void 0;
const Validation_1 = require("../../shared/middlewares/Validation");
const yup = __importStar(require("yup"));
const http_status_codes_1 = require("http-status-codes");
const historico_1 = require("../../database/providers/historico");
const reporte_1 = require("../../database/providers/reporte");
exports.createValidation = (0, Validation_1.validation)((getSchema) => ({
    body: getSchema(yup.object({
        relato: yup.string().required().max(500),
        idEstacao: yup.number().required(),
    }))
}));
const create = async (req, res) => {
    const { idEstacao, ...restoDoBody } = req.body;
    const bodyParaInserir = {
        ...restoDoBody,
        fk_Estacao_id: idEstacao
    };
    const result = await reporte_1.ReporteProvidedr.create(bodyParaInserir);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }
    const dadosParaHistorico = {
        nomeUsuario: req.query.nomeUsuario || "-",
        emailUsuario: req.query.emailUsuario || "-",
        fk_Estacao_id: idEstacao,
        descricao: "Reporte cadastrado"
    };
    const createHistoricoResul = await historico_1.HistoricoProvider.create(dadosParaHistorico);
    if (createHistoricoResul instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: createHistoricoResul.message
            }
        });
    }
    return res.status(http_status_codes_1.StatusCodes.CREATED).json(result);
};
exports.create = create;
//# sourceMappingURL=Create.js.map