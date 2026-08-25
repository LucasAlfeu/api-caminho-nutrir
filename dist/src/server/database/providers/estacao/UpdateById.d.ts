import { IEstacao } from "../../models";
export type IEstacaoUpdate = Omit<IEstacao, 'id' | 'idClassificacao'> & {
    fk_Classificacao_id: number;
};
export declare const updateById: (id: number, estacao: IEstacaoUpdate) => Promise<void | Error>;
//# sourceMappingURL=UpdateById.d.ts.map