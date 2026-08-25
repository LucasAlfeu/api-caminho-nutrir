"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const http_status_codes_1 = require("http-status-codes");
const validation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errosResult = {};
    const schemasKeys = Object.keys(schemas);
    for (const key of schemasKeys) {
        const schema = schemas[key];
        if (!schema)
            continue;
        try {
            await schema.validate(req[key], { abortEarly: false });
        }
        catch (erro) {
            const yupError = erro;
            const validationErrors = {};
            yupError.inner.forEach(err => {
                if (!err.path)
                    return;
                validationErrors[err.path] = err.message;
            });
            errosResult[key] = validationErrors;
        }
    }
    if (Object.keys(errosResult).length === 0) {
        return next();
    }
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        errors: errosResult
    });
};
exports.validation = validation;
//# sourceMappingURL=Validation.js.map