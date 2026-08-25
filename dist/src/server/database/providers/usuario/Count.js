"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
const knex_1 = require("../../knex");
const ETable_1 = require("../../ETable");
// export const count = async (filter = ''): Promise<number | Error> => {
//   try {
//     const [{ count }] = await Knex(ETableNames.usuario)
//       .where('nome', 'like', `%¨${filter}%`)
//       .count<[{ count: number }]>('* as count');
//     if (Number.isInteger(Number(count))) return Number(count);
//     return new Error('Erro ao consultar a quantidade total de registros');
//   } catch (error) {
//     console.log(error)
//     return new Error('Erro ao consultar a quantidade total de registros');
//   }
// }
const count = async (filter = '') => {
    try {
        const result = await (0, knex_1.Knex)(ETable_1.ETableNames.usuario)
            .where('nome', 'like', `%${filter}%`) // Removi o caractere especial '¨' que estava no seu código
            .count('* as count')
            .first(); // .first() garante que pegamos o primeiro objeto ou undefined
        if (result) {
            const total = Number(result.count);
            if (!isNaN(total))
                return total;
        }
        return new Error('Erro ao consultar a quantidade total de registros');
    }
    catch (error) {
        console.error(error);
        return new Error('Erro ao consultar a quantidade total de registros');
    }
};
exports.count = count;
//# sourceMappingURL=Count.js.map