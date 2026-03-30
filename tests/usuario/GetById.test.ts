import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Usuario - GetById', () => {

  it('Busca registro por id', async () => {

    const res1 = await testServer
      .post('/usuario')
      .send({ 
        nome: 'Lucas Alfeu',
        usuario: 'lucasalfeu',
        senha: '123456',
        email: 'teste@teste.com',
        matricula: '20230011254' 
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/usuario/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });
  
  it('Tenta buscar registro que não existe', async () => {

    const res1 = await testServer
      .get('/usuario/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
  
});