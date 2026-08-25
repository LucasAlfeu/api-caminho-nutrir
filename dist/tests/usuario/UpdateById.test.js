"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe('Usuario - GetById', () => {
    it('Atualiza registro', async () => {
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
        const resAtualizada = await jest_setup_1.testServer
            .put(`/usuario/${res1.body}`)
            .send({
            nome: 'Alfeu Lucas',
            usuario: 'lucasalfeu',
            senha: '123456',
            email: 'teste@teste.com',
            matricula: '20230011254'
        });
        expect(resAtualizada.statusCode).toEqual(http_status_codes_1.StatusCodes.NO_CONTENT);
    });
    it('Tenta atualizar registro que não existe', async () => {
        const res1 = await jest_setup_1.testServer
            .put('/usuario/99999')
            .send({
            nome: 'Lucas Alfeu',
            usuario: 'lucasalfeu0202',
            senha: '123456',
            email: 'teste@teste.com',
            matricula: '20230011254'
        });
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});
//# sourceMappingURL=UpdateById.test.js.map