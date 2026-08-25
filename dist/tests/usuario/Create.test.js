"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe('Usuario - Create', () => {
    it('Criar registro', async () => {
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
        expect(typeof res1.body).toEqual('number');
    });
    it('Senha muito curta', async () => {
        const res1 = await jest_setup_1.testServer
            .post('/usuario')
            .send({
            nome: 'Lucas Alfeu',
            usuario: 'lucasalfeu',
            senha: '123',
            email: 'teste@teste.com',
            matricula: '20230011254'
        });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.BAD_REQUEST);
        expect(res1.body).toHaveProperty('errors.body.senha');
    });
});
//# sourceMappingURL=Create.test.js.map