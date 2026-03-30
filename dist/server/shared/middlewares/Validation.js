import { StatusCodes } from "http-status-codes";
export const validation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);
    const errosResult = {};
    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key], { abortEarly: false });
        }
        catch (erro) {
            const yupError = erro;
            let validationErrors = {};
            yupError.inner.forEach(err => {
                if (!err.path)
                    return;
                validationErrors[err.path] = err.message;
            });
            errosResult[key] = validationErrors;
        }
    });
    if (Object.entries(errosResult).length === 0) {
        return next();
    }
    else {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: errosResult
        });
    }
};
//# sourceMappingURL=Validation.js.map