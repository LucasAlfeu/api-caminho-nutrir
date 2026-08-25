import type { Request, Response } from "express";
export interface IParamProps {
    id?: number;
}
export interface IQueryProps {
    nomeUsuario?: string;
    emailUsuario?: string;
    idEstacao: number;
}
export declare const deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const deleteById: (req: Request<IParamProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Delete.d.ts.map