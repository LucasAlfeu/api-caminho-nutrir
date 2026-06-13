CREATE DATABASE CaminhoNutrir;
USE CaminhoNutrir;

CREATE TABLE BancoDeLeite (
  id INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  cep VARCHAR(9) NOT NULL,
  logradouro VARCHAR(255) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  complemento VARCHAR(100),
  municipio VARCHAR(100) NOT NULL,
  uf CHAR(2) NOT NULL,
  longitude DECIMAL(11, 7),
  latitude DECIMAL(10, 7),  
  CONSTRAINT pk_banco_de_leite PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE Usuario(
  id INT AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  matricula VARCHAR(50) NOT NULL UNIQUE,
  indAdm TINYINT(1) DEFAULT 0,       
  indLiberado TINYINT(1) DEFAULT 0,  
  usuario VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  dataUltimaAtualizacao VARCHAR(255) NOT NULL,
  CONSTRAINT pk_usuario PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE gerencia (
  fk_Usuario_id INT,
  fk_BancoDeLeite_id INT,
  CONSTRAINT pk_gerencia PRIMARY KEY (fk_Usuario_id, fk_BancoDeLeite_id),
    
  CONSTRAINT fk_gerencia_usuario FOREIGN KEY (fk_Usuario_id) 
    REFERENCES Usuario(id) 
    ON DELETE CASCADE ON UPDATE CASCADE,
        
  CONSTRAINT fk_gerencia_banco FOREIGN KEY (fk_BancoDeLeite_id) 
    REFERENCES BancoDeLeite(id) 
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;