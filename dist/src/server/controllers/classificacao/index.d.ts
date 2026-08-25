export declare const ClassificacaoController: {
    create: (req: import("express").Request<{}, {}, import("../../database/models").IClassificacao>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAll: (req: import("express").Request<{}, {}, {}, import("./GetAll").IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    update: (req: import("express").Request<import("./Update").IParamProps, {}, import("./Update").IBodyProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    updateValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    deleteById: (req: import("express").Request<import("./Delete").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
};
//# sourceMappingURL=index.d.ts.map