import { setLocale } from "yup";

setLocale({
  // Mensagens genéricas (aplicáveis a qualquer tipo)
  mixed: {
    default: 'Campo inválido',
    required: 'Este campo é obrigatório',
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Não pode ser um dos seguintes valores: ${values}',
  },
  // Mensagens para strings
  string: {
    length: 'Deve ter exatamente ${length} caracteres',
    min: 'Deve ter pelo menos 3 caracteres',
    max: 'Deve ter no máximo ${max} caracteres',
    email: 'Deve ser um e-mail válido',
    url: 'Deve ser uma URL válida',
    trim: 'Não deve conter espaços no início ou no fim',
    lowercase: 'Deve estar em letras minúsculas',
    uppercase: 'Deve estar em letras maiúsculas',
  },
  // Mensagens para números
  number: {
    min: 'Deve ser no mínimo ${min}',
    max: 'Deve ser no máximo ${max}',
    lessThan: 'Deve ser menor que ${lessThan}',
    moreThan: 'Deve ser maior que ${moreThan}',
    positive: 'Deve ser um número positivo',
    negative: 'Deve ser um número negativo',
    integer: 'Deve ser um número inteiro',
  },
  // Mensagens para booleanos
  boolean: {
    isValue: 'Deve ser um valor booleano',
  },
});