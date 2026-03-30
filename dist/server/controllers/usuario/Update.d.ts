import type { Request, RequestHandler, Response } from "express";
export interface IBodyProps {
    nome: string;
    usuario: string;
    senha: string;
    email: string;
    matricula: string;
    indAdm: boolean;
}
export interface IParamProps {
    id?: number;
}
export declare const updateValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const update: (req: Request<IParamProps, {}, IBodyProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Update.d.ts.map