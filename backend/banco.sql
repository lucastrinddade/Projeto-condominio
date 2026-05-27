CREATE DATABASE condominio;

USE condominio;

CREATE TABLE condominos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    email VARCHAR(100),
    quantidade_automoveis INT,
    tipo VARCHAR(20)
);

CREATE TABLE mensagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    autor VARCHAR(100),
    mensagem TEXT,
    data_envio DATETIME
);

CREATE TABLE utensilios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    quantidade INT,
    disponivel BOOLEAN
);

CREATE TABLE reservas_salao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_responsavel VARCHAR(100),
    data_reserva DATE,
    horario VARCHAR(50)
);