import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation.js";
export const updateValidation = validation((getSchema) => ({
    body: getSchema(yup.object({
        nome: yup.string().required().min(3),
        usuario: yup.string().required(),
        senha: yup.string().required().min(6),
        email: yup.string().email().required(),
        matricula: yup.string().required(),
        indAdm: yup.boolean().default(() => { return false; }),
    })),
    params: getSchema(yup.object({
        id: yup.number().required().moreThan(0),
    }))
}));
export const update = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não Implantado! ");
};
//# sourceMappingURL=Update.js.map