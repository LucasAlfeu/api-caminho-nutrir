import type { Request, RequestHandler, Response } from "express";
export interface IParamProps {
    id?: number;
}
export declare const enableUserByIdValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const enableUserById: (req: Request<IParamProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=EnableUserById.d.ts.map