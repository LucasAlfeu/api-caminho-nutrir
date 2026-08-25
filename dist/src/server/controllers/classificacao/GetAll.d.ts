import type { Request, RequestHandler, Response } from "express";
export interface IQueryProps {
    id?: number | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    filter?: string | undefined;
}
export declare const getAllValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const getAll: (req: Request<{}, {}, {}, IQueryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=GetAll.d.ts.map