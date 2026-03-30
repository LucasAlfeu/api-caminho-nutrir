import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe('Usuario - GetById', () => {

  it('Atualiza registro', async () => {

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

    const resAtualizada = await testServer
      .put(`/usuario/${res1.body}`)
      .send({ 
        nome: 'Alfeu Lucas',
        usuario: 'lucasalfeu',
        senha: '123456',
        email: 'teste@teste.com',
        matricula: '20230011254' 
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta atualizar registro que não existe', async () => {

    const res1 = await testServer
      .put('/usuario/99999')
      .send({ 
        nome: 'Lucas Alfeu',
        usuario: 'lucasalfeu0202',
        senha: '123456',
        email: 'teste@teste.com',
        matricula: '20230011254' 
      });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
  
});