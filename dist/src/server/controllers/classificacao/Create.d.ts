import type { Request, RequestHandler, Response } from "express";
import { IClassificacao } from "../../database/models";
export interface IBoryProps extends Omit<IClassificacao, 'id'> {
}
export declare const createValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const create: (req: Request<{}, {}, IClassificacao>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Create.d.ts.map