import { IUsuario } from "../../models";
type TUsuarioListagem = Omit<IUsuario, 'usuario' | 'senha' | 'email'>;
export declare const getAll: (page: number, limit: number, filter: string, id?: number) => Promise<TUsuarioListagem[] | Error>;
export {};
//# sourceMappingURL=GetAll.d.ts.map