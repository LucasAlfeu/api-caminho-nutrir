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
exports.deleteById = exports.deleteByIdValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const yup = __importStar(require("yup"));
const Validation_1 = require("../../shared/middlewares/Validation");
const reporte_1 = require("../../database/providers/reporte");
const historico_1 = require("../../database/providers/historico");
exports.deleteByIdValidation = (0, Validation_1.validation)((getSchema) => ({
    params: getSchema(yup.object({
        id: yup.number().integer().required().moreThan(0)
    })),
    query: getSchema(yup.object({
        nomeUsuario: yup.string().optional().default(''),
        emailUsuario: yup.string().optional().default(''),
        idEstacao: yup.number().integer().required().moreThan(0)
    }))
}));
// 1. Voltamos o Request apenas com IParamProps para o Express (router) não reclamar
const deleteById = async (req, res) => {
    // 2. Avisamos ao TypeScript que a query já foi validada e convertida pelo Yup
    const query = req.query;
    if (!req.params.id) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado'
            }
        });
    }
    // 3. Agora usamos a variável 'query' que acabamos de tipar
    const idEstacao = query.idEstacao;
    if (!idEstacao) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "idEstacao" precisa ser informado na URL'
            }
        });
    }
    const dadosParaHistorico = {
        nomeUsuario: query.nomeUsuario || "-",
        emailUsuario: query.emailUsuario || "-",
        fk_Estacao_id: idEstacao,
        descricao: "Reporte finalizado"
    };
    const createHistoricoResul = await historico_1.HistoricoProvider.create(dadosParaHistorico);
    if (createHistoricoResul instanceof Error) {
        console.error("Erro ao salvar histórico de exclusão:", createHistoricoResul.message);
    }
    const result = await reporte_1.ReporteProvidedr.deleteById(req.params.id);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }
    return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
};
exports.deleteById = deleteById;
//# sourceMappingURL=Delete.js.map