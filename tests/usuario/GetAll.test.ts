import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Usuario - GetAll', () => {

  it('Buscar todos os registros', async () => {

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
      .get('/usuario')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
  
});