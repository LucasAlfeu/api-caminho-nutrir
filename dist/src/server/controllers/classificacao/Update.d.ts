import type { Request, RequestHandler, Response } from "express";
import { IClassificacao } from "../../database/models";
export interface IBodyProps extends Omit<IClassificacao, 'id' | 'indAdm' | 'indLiberado' | 'senha'> {
    senha?: string;
}
export interface IParamProps {
    id?: number;
}
export declare const updateValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const update: (req: Request<IParamProps, {}, IBodyProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=Update.d.ts.map