import type { Request, RequestHandler, Response } from "express";
import { IUsuario } from "../../database/models";
export interface IBoryProps extends Omit<IUsuario, 'id'> {
}
export declare const createValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, IUsuario>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Create.d.ts.map