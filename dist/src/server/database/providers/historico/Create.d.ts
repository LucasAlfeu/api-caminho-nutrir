import { IHistorico } from "../../models";
export type IHistoricoInsert = Omit<IHistorico, 'id' | 'idEstacao'> & {
    fk_Estacao_id: number;
};
export declare const create: (historico: Omit<IHistoricoInsert, "id">) => Promise<number | Error>;
//# sourceMappingURL=Create.d.ts.map