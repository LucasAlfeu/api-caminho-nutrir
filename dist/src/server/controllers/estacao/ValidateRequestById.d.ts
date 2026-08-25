import type { Request, RequestHandler, Response } from "express";
export interface IParamProps {
    id?: number;
}
export interface IQueryProps {
    nomeUsuario?: string;
    emailUsuario?: string;
}
export declare const validadeRequestByIdValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const validadeRequestById: (req: Request<IParamProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ValidateRequestById.d.ts.map