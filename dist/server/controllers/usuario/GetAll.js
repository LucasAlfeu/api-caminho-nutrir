import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middlewares/Validation.js";
export const getAllValidation = validation((getSchema) => ({
    query: getSchema(yup.object({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional(),
    }))
}));
export const getAll = async (req, res) => {
    console.log(req.query);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
//# sourceMappingURL=GetAll.js.map