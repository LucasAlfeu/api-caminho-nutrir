export interface IRequest {
  nome: string,
  descricao?: string,
  cep: string,
  logradouro: string,
  bairro: string,
  numero: string,
  complemento?: string,
  municipio: string,
  uf: string,
  idClassificacao: number,
  nomeUsuario: string,
  emailUsuario: string,
}