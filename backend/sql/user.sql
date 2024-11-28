create database login;
CREATE USER 'user'@'%' IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON login.* TO 'user'@'%';
use login;
CREATE TABLE login.usuario (
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    confirmar_senha VARCHAR(255) NOT NULL
);
select * from usuario;