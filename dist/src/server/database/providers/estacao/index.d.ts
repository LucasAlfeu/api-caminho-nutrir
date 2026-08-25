export declare const EstacaoProvider: {
    create: (bancoLeite: Omit<import("../../models").IEstacao, "id">) => Promise<number | Error>;
    getAll: (page: number, limit: number, filter: string, id?: number, indValidado?: boolean) => Promise<import("../../models").IEstacao[] | Error>;
    getById: (id: number) => Promise<import("../../models").IEstacao | Error>;
    updateById: (id: number, estacao: import("./UpdateById").IEstacaoUpdate) => Promise<void | Error>;
    deleteById: (id: number) => Promise<void | Error>;
    count: (filter?: string) => Promise<number | Error>;
    createRequest: (bancoLeite: import("./CreateRequest").IEstacaoInsert) => Promise<number | Error>;
    validadeRequestById: (idEstacao: number) => Promise<number | Error>;
};
//# sourceMappingURL=index.d.ts.map