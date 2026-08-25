import type { Request, RequestHandler, Response } from "express";
export interface IParamProps {
    id?: number;
}
export declare const getByIdValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getById: (req: Request<IParamProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=GetById.d.ts.map