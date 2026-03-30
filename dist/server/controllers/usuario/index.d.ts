export declare const UsuarioController: {
    create: (req: import("express").Request<{}, {}, import("./Create.js").IUsuario>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAll: (req: import("express").Request<{}, {}, {}, import("./GetAll.js").IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getById: (req: import("express").Request<{}, {}, {}, import("./GetById.js").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    update: (req: import("express").Request<import("./Update.js").IParamProps, {}, import("./Update.js").IBodyProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    updateValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    deleteById: (req: import("express").Request<import("./Delete.js").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
};
//# sourceMappingURL=index.d.ts.map