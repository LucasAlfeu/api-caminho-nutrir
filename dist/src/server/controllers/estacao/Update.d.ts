import type { Request, Response } from "express";
import { IEstacao } from "../../database/models";
export interface IBodyProps extends Omit<IEstacao, 'id' | 'descricao' | 'complemento'> {
    descricao?: string | null;
    complemento?: string | null;
}
export interface IParamProps {
    id?: number;
}
export interface IQueryProps {
    nomeUsuario?: string;
    emailUsuario?: string;
}
export declare const updateValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const update: (req: Request<IParamProps, any, IBodyProps, IQueryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Update.d.ts.map