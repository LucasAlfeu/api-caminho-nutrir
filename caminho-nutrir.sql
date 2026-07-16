CREATE DATABASE CaminhoNutrir;
USE CaminhoNutrir;

CREATE TABLE Classificacao (
  id INT AUTO_INCREMENT,
  descricao VARCHAR(255) NOT NULL,
  cor VARCHAR(50) NOT NULL,
  CONSTRAINT pk_classificacao PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE BancoDeLeite_Endereco (
  id INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  indValidado TINYINT(1) DEFAULT 0,
  telefone VARCHAR(20),
  cep VARCHAR(9) NOT NULL,
  logradouro VARCHAR(255) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  complemento VARCHAR(100),
  municipio VARCHAR(100) NOT NULL,
  uf CHAR(2) NOT NULL,
  longitude DECIMAL(11, 7),
  latitude DECIMAL(10, 7),
  fk_Classificacao_id INT NOT NULL,
  CONSTRAINT pk_banco_leite_endereco PRIMARY KEY (id),
  CONSTRAINT fk_banco_classificacao FOREIGN KEY (fk_Classificacao_id) 
    REFERENCES Classificacao(id) 
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Usuario_Credenciais (
  id INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  matricula VARCHAR(50) NOT NULL UNIQUE,
  indAdm TINYINT(1) DEFAULT 0,       
  indLiberado TINYINT(1) DEFAULT 0,  
  usuario VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  CONSTRAINT pk_usuario_credenciais PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE gerencia (
  fk_Usuario_Credenciais_id INT,
  fk_BancoDeLeite_Endereco_id INT,
  CONSTRAINT pk_gerencia PRIMARY KEY (fk_Usuario_Credenciais_id, fk_BancoDeLeite_Endereco_id),
    
  CONSTRAINT fk_gerencia_usuario FOREIGN KEY (fk_Usuario_Credenciais_id) 
    REFERENCES Usuario_Credenciais(id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
        
  CONSTRAINT fk_gerencia_banco FOREIGN KEY (fk_BancoDeLeite_Endereco_id) 
    REFERENCES BancoDeLeite_Endereco(id) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;