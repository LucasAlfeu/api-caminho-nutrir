import type { Request, Response } from "express";
import { IEstacao } from "../../database/models";
export interface IBoryProps extends Omit<IEstacao, 'id' | 'indValidado'> {
}
export interface IQueryProps {
    nomeUsuario?: string;
    emailUsuario?: string;
}
export declare const createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, IBoryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Create.d.ts.map