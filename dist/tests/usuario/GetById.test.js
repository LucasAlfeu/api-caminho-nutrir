"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const jest_setup_1 = require("../jest.setup");
describe('Usuario - GetById', () => {
    it('Busca registro por id', async () => {
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
            .get(`/usuario/${res1.body}`)
            .send();
        expect(resBuscada.statusCode).toEqual(http_status_codes_1.StatusCodes.OK);
        expect(resBuscada.body).toHaveProperty('nome');
    });
    it('Tenta buscar registro que não existe', async () => {
        const res1 = await jest_setup_1.testServer
            .get('/usuario/99999')
            .send();
        expect(res1.statusCode).toEqual(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });
});
//# sourceMappingURL=GetById.test.js.map