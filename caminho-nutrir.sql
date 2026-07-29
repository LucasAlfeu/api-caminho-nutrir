CREATE DATABASE CaminhoNutrir;
USE CaminhoNutrir;

CREATE TABLE Classificacao (
  id INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  cor VARCHAR(50) NOT NULL,
  CONSTRAINT pk_classificacao PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE Estacao (
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
  fk_Classificacao_id INT NULL,
  CONSTRAINT pk_estacao PRIMARY KEY (id),
  CONSTRAINT fk_estacao_classificacao FOREIGN KEY (fk_Classificacao_id) 
    REFERENCES Classificacao(id) 
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Usuario (
  id INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  matricula VARCHAR(50) NOT NULL UNIQUE,
  indAdm TINYINT(1) DEFAULT 0,       
  indLiberado TINYINT(1) DEFAULT 0,  
  usuario VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  CONSTRAINT pk_usuario PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE gerencia (
  fk_Usuario_id INT,
  fk_Estacao_id INT,
  CONSTRAINT pk_gerencia PRIMARY KEY (fk_Usuario_id, fk_Estacao_id),
    
  CONSTRAINT fk_gerencia_usuario FOREIGN KEY (fk_Usuario_id) 
    REFERENCES Usuario(id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
        
  CONSTRAINT fk_gerencia_estacao FOREIGN KEY (fk_Estacao_id) 
    REFERENCES Estacao(id) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE Historico (
  id INT AUTO_INCREMENT,
  data DATETIME DEFAULT CURRENT_TIMESTAMP,
  descricao VARCHAR(255) NOT NULL,
  nomeUsuario VARCHAR(255) NOT NULL,
  emailUsuario VARCHAR(255) NOT NULL,
  fk_Estacao_id INT NOT NULL,
  CONSTRAINT pk_historico PRIMARY KEY (id),
  CONSTRAINT fk_historico_estacao FOREIGN KEY (fk_Estacao_id) 
    REFERENCES Estacao(id) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;


-- Liberar Primeiro usuário

UPDATE Usuario 
SET indAdm = 1, indLiberado = 1 
WHERE id = 1;