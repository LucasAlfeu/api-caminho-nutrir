export declare const ClassificacaoProvider: {
    create: (classificacao: Omit<import("../../models").IClassificacao, "id">) => Promise<number | Error>;
    getAll: (page: number, limit: number, filter: string, id?: number) => Promise<import("../../models").IClassificacao[] | Error>;
    updateById: (id: number, classificacao: Omit<import("../../models").IClassificacao, "id">) => Promise<void | Error>;
    deleteById: (id: number) => Promise<void | Error>;
    count: (filter?: string) => Promise<number | Error>;
    getById: (id: number) => Promise<import("../../models").IClassificacao | Error>;
};
//# sourceMappingURL=index.d.ts.map