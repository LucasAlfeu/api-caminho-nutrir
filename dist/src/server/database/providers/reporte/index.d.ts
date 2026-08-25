export declare const ReporteProvidedr: {
    create: (reporte: Omit<import("../../models/Reporte").IReporte, "id">) => Promise<number | Error>;
    getAllById: (id: number) => Promise<Pick<import("../../models/Reporte").IReporte, "id" | "relato">[] | Error>;
    deleteById: (id: number) => Promise<void | Error>;
};
//# sourceMappingURL=index.d.ts.map