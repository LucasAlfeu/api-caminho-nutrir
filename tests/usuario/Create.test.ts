import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Usuario - Create', () => {

  it('Criar registro', async () => {
    const res1 = await testServer
      .post('/usuario')
      .send({
        nome: 'Lucas Alfeu',
        usuario: 'lucasalfeu',
        senha: '123456',
        email: 'teste@teste.com',
        matricula: '20230011254'
      })

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  })
  it('Senha muito curta', async () => {
    const res1 = await testServer
      .post('/usuario')
      .send({
        nome: 'Lucas Alfeu',
        usuario: 'lucasalfeu',
        senha: '123',
        email: 'teste@teste.com',
        matricula: '20230011254'
      })

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.senha');
  })
});