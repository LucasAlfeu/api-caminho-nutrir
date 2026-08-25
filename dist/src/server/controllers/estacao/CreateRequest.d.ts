import type { Request, Response } from "express";
import { IRequest } from "../../database/models/IRequest";
export interface IBoryProps extends IRequest {
}
export declare const createRequestValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const createRequest: (req: Request<{}, {}, IRequest>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=CreateRequest.d.ts.map