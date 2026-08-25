import type { Request, RequestHandler, Response } from "express";
export interface IBoryProps {
    email?: string;
    matricula?: string;
    usuario?: string;
    novaSenha?: string;
}
export declare const resetPasswordValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const resetPassword: (req: Request<IBoryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ResetPassword.d.ts.map