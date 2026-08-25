import type { Request, Response } from "express";
import { IReporte } from "../../database/models/Reporte";
export interface IBoryProps extends Omit<IReporte, 'id'> {
}
export interface IQueryProps {
    nomeUsuario?: string;
    emailUsuario?: string;
}
export declare const createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, IBoryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Create.d.ts.map