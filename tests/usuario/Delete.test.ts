import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Usuario - Delete', () => {

  it('Apaga registro', async () => {

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

    const resApagada = await testServer
      .delete(`/usuario/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  

  it('Tenta apagar registro que não existe', async () => {

    const res1 = await testServer
      .delete('/usuario/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});