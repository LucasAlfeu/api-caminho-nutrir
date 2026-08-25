export declare const UsuarioProvider: {
    create: (usuario: Omit<import("../../models").IUsuario, "id">) => Promise<number | Error>;
    getAll: (page: number, limit: number, filter: string, id?: number) => Promise<{
        id: number;
        nome: string;
        matricula: string;
        indAdm: boolean;
        indLiberado: boolean;
    }[] | Error>;
    getById: (id: number) => Promise<import("../../models").IUsuario | Error>;
    getByUsuario: (usuario: string) => Promise<import("../../models").IUsuario | Error>;
    updateById: (id: number, usuario: Partial<Omit<import("../../models").IUsuario, "id">>) => Promise<import("../../models").IUsuario | Error>;
    deleteById: (id: number) => Promise<void | Error>;
    count: (filter?: string) => Promise<number | Error>;
    enableUserById: (idUsuario: number) => Promise<number | Error>;
    becomeAdmById: (idUsuario: number) => Promise<number | Error>;
    disableUserById: (idUsuario: number) => Promise<number | Error>;
    resetPassword: (usuario: string, email: string, matricula: string, novaSenha: string) => Promise<number | Error>;
};
//# sourceMappingURL=index.d.ts.map