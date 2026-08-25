"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const http_status_codes_1 = require("http-status-codes");
const service_1 = require("../service");
const ensureAuthenticated = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            errors: { default: 'Não autenticado' }
        });
    }
    const [type, token] = authorization.split(' ');
    if (type !== 'Bearer' || !token) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            errors: { default: 'Não autenticado' }
        });
    }
    console.log(token);
    const jwtData = service_1.JWTService.verify(token);
    console.log(jwtData);
    if (jwtData === 'JWT_SECRET_NOT_FOUND') {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: { default: 'Erro ao verificar o token' }
        });
    }
    else if (jwtData === 'INVALID_TOKEN') {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            errors: { default: 'Não autenticado' }
        });
    }
    req.headers.idUsuario = jwtData.uid.toString();
    return next();
};
exports.ensureAuthenticated = ensureAuthenticated;
//# sourceMappingURL=EnsureAuthenticate.js.map