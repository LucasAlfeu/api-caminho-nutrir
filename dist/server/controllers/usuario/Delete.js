import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation.js";
export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema(yup.object({
        id: yup.number().integer().required().moreThan(0)
    }))
}));
export const deleteById = async (req, res) => {
    console.log(req.params);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
//# sourceMappingURL=Delete.js.map