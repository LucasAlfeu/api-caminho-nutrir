export declare const HistoricoProvider: {
    create: (historico: Omit<import("./Create").IHistoricoInsert, "id">) => Promise<number | Error>;
    count: (filter?: string) => Promise<number | Error>;
    getAllByIdEstacao: (id: number) => Promise<Pick<import("../../models").IHistorico, "id" | "data" | "descricao" | "nomeUsuario" | "emailUsuario">[] | Error>;
};
//# sourceMappingURL=index.d.ts.map