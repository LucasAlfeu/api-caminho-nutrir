import type { Request, RequestHandler, Response } from "express";
export interface IUsuario {
    nome: string;
    usuario: string;
    senha: string;
    email: string;
    matricula: string;
    indAdm: boolean;
}
export declare const createValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, IUsuario>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Create.d.ts.map