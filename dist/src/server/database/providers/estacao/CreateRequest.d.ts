import { IRequest } from "../../models/IRequest";
export type IEstacaoInsert = Omit<IRequest, 'idClassificacao' | 'nomeUsuario' | 'emailUsuario'> & {
    fk_Classificacao_id: number;
};
export declare const createRequest: (bancoLeite: IEstacaoInsert) => Promise<number | Error>;
//# sourceMappingURL=CreateRequest.d.ts.map