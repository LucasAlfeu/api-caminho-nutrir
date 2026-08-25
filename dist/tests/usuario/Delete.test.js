"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe('Usuario - Delete', () => {
    it('Apaga registro', async () => {
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
        const resApagada = await jest_setup_1.testServer
            .delete(`/usuario/${res1.body}`)
            .send();
        expect(resApagada.statusCode).toEqual(http_status_codes_1.StatusCodes.NO_CONTENT);
    });
    it('Tenta apagar registro que não existe', async () => {
        const res1 = await jest_setup_1.testServer
            .delete('/usuario/99999')
            .send();
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});
//# sourceMappingURL=Delete.test.js.map