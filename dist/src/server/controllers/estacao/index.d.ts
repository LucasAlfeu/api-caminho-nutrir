export declare const EstacaoController: {
    create: (req: import("express").Request<{}, {}, import("./Create").IBoryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAll: (req: import("express").Request<{}, {}, {}, import("./GetAll").IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getAllValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getById: (req: import("express").Request<import("./GetById").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    getByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    update: (req: import("express").Request<import("./Update").IParamProps, any, import("./Update").IBodyProps, import("./Update").IQueryProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    updateValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    deleteById: (req: import("express").Request<import("./Delete").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    deleteByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    createRequest: (req: import("express").Request<{}, {}, import("../../database/models/IRequest").IRequest>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
    createRequestValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    validadeRequestByIdValidation: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    validadeRequestById: (req: import("express").Request<import("./ValidateRequestById").IParamProps>, res: import("express").Response) => Promise<import("express").Response<any, Record<string, any>>>;
};
//# sourceMappingURL=index.d.ts.map