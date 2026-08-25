import type { Request, RequestHandler, Response } from "express";
import { IUsuario } from "../../database/models";
export interface IBoryProps extends Omit<IUsuario, 'id' | 'nome' | 'matricula' | 'email' | 'indAdm' | 'indLiberado'> {
}
export declare const singInValidation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const singIn: (req: Request<{}, {}, IBoryProps>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=SingIn.d.ts.map