import type { Request, RequestHandler, Response } from "express";
export interface IParamProps {
    id?: number;
}
export declare const disableUserByIdValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const disableUserById: (req: Request<IParamProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=DisableUserById.d.ts.map