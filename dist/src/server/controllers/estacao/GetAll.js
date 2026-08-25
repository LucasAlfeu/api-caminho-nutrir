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
exports.getAll = exports.getAllValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const yup = __importStar(require("yup"));
const Validation_1 = require("../../shared/middlewares/Validation");
const estacao_1 = require("../../database/providers/estacao");
const historico_1 = require("../../database/providers/historico");
const classificacao_1 = require("../../database/providers/classificacao");
const reporte_1 = require("../../database/providers/reporte");
exports.getAllValidation = (0, Validation_1.validation)((getSchema) => ({
    query: getSchema(yup.object({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        id: yup.number().integer().optional().moreThan(0),
        filter: yup.string().optional(),
        indValidado: yup.boolean().optional(),
    }))
}));
const getAll = async (req, res) => {
    const isIndValidado = req.query.indValidado === 'true' || req.query.indValidado === true;
    const result = await estacao_1.EstacaoProvider.getAll(req.query.page, req.query.limit, req.query.filter || '', req.query.id ? Number(req.query.id) : 0, req.query.indValidado !== undefined ? isIndValidado : undefined);
    const count = await estacao_1.EstacaoProvider.count(req.query.filter);
    if (result instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: result.message } });
    }
    else if (count instanceof Error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: count.message } });
    }
    const resultCompleto = await Promise.all(result.map(async (estacao) => {
        const recuperaHistorico = await historico_1.HistoricoProvider.getAllByIdEstacao(estacao.id);
        let historicoReverso = [];
        if (!(recuperaHistorico instanceof Error)) {
            historicoReverso = recuperaHistorico.reverse();
        }
        const dataUltimaInsercao = historicoReverso.length > 0 ? historicoReverso[0].data : null;
        const getCategoria = await classificacao_1.ClassificacaoProvider.getById(estacao.idClassificacao);
        let categoria;
        if (!(getCategoria instanceof Error)) {
            categoria = getCategoria;
        }
        const { fk_Classificacao_id, idClassificacao, ...estacaoFormatada } = estacao;
        const recuperaReporte = await reporte_1.ReporteProvidedr.getAllById(estacao.id);
        if (recuperaReporte instanceof Error) {
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                    default: recuperaReporte.message
                }
            });
        }
        const numReporte = recuperaReporte.length;
        return {
            ...estacaoFormatada,
            categoria: categoria,
            dataUltimaAtualizacao: dataUltimaInsercao,
            numReporte: numReporte,
        };
    }));
    res.setHeader('x-total-count', String(count));
    res.setHeader('Access-Control-Expose-Headers', 'x-total-count');
    return res.status(http_status_codes_1.StatusCodes.OK).json(resultCompleto);
};
exports.getAll = getAll;
//# sourceMappingURL=GetAll.js.map