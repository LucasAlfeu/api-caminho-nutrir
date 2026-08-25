"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe('Usuario - GetAll', () => {
    it('Buscar todos os registros', async () => {
        const res1 = await jest_setup_1.testServer
            .post('/usuario')
            .send({
            nome: 'Lucas Alfeu',
            usuario: 'lucasalfeu',
            senha: '123456',
            email: 'teste@teste.com',
            matricula: '20230011254'
        });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.CREATED);
        const resBuscada = await jest_setup_1.testServer
            .get('/usuario')
            .send();
        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(http_status_codes_1.StatusCodes.OK);
        expect(resBuscada.body.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=GetAll.test.js.map