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
exports.update = exports.updateValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const yup = __importStar(require("yup"));
const Validation_1 = require("../../shared/middlewares/Validation");
const estacao_1 = require("../../database/providers/estacao");
const historico_1 = require("../../database/providers/historico");
exports.updateValidation = (0, Validation_1.validation)((getSchema) => ({
    body: getSchema(yup.object({
        nome: yup.string().required().min(3).max(150),
        descricao: yup.string().nullable().default("").optional().max(300),
        cep: yup.string().required().min(8).max(8),
        logradouro: yup.string().required(),
        bairro: yup.string().required(),
        numero: yup.string().required(),
        complemento: yup.string().nullable().default("").optional(),
        municipio: yup.string().required(),
        uf: yup.string().required(),
        longitude: yup.string().required(),
        latitude: yup.string().required(),
        idClassificacao: yup.number().required(),
        indValidado: yup.boolean().required(),
    })),
    query: getSchema(yup.object({
        nomeUsuario: yup.string().required(),
        emailUsuario: yup.string().email().required()
    }))
}));
const update = async (req, res) => {
    if (!req.params.id) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "id" precisa ser informado'
            }
        });
    }
    const { idClassificacao, descricao, complemento, ...restoDoBody } = req.body;
    const bodyUptade = {
        ...restoDoBody,
        descricao: descricao ?? '',
        complemento: complemento ?? '',
        fk_Classificacao_id: idClassificacao,
    };
    const result = await estacao_1.EstacaoProvider.updateById(req.params.id, bodyUptade);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }
    const idDaEstacao = Number(req.params.id);
    const dadosParaHistorico = {
        nomeUsuario: req.query.nomeUsuario,
        emailUsuario: req.query.emailUsuario,
        fk_Estacao_id: idDaEstacao,
        descricao: "Banco de leite atualizado"
    };
    const createHistoricoResul = await historico_1.HistoricoProvider.create(dadosParaHistorico);
    if (createHistoricoResul instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: createHistoricoResul.message
            }
        });
    }
    return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
};
exports.update = update;
//# sourceMappingURL=Update.js.map