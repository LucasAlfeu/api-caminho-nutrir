import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation.js";
export const createValidation = validation((getSchema) => ({
    body: getSchema(yup.object({
        nome: yup.string().required().min(3),
        usuario: yup.string().required(),
        senha: yup.string().required().min(6),
        email: yup.string().email().required(),
        matricula: yup.string().required(),
        indAdm: yup.boolean().default(() => { return false; }),
    }))
}));
export const create = async (req, res) => {
    console.log(req.body);
    return res.send("Create! ");
};
//# sourceMappingURL=Create.js.map