export declare const UsuarioController: {
    create: (req: import("express").Request<{}, {}, import("../../database/models").IUsuario>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    singIn: (req: import("express").Request<{}, {}, import("./SingIn").IBoryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    singInValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAll: (req: import("express").Request<{}, {}, {}, import("./GetAll").IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getById: (req: import("express").Request<import("./GetById").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    update: (req: import("express").Request<import("./Update").IParamProps, {}, import("./Update").IBodyProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    updateValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    deleteById: (req: import("express").Request<import("./Delete").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    enableUserById: (req: import("express").Request<import("./EnableUserById").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    enableUserByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    becomeAdmById: (req: import("express").Request<import("./BecomeAdm").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    becomeAdmByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    disableUserById: (req: import("express").Request<import("./DisableUserById").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    disableUserByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    resetPassword: (req: import("express").Request<import("./ResetPassword").IBoryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    resetPasswordValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
};
//# sourceMappingURL=index.d.ts.map