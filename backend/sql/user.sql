create database login;
-- CREATE USER 'user'@'%' IDENTIFIED BY 'user';
create user 'user'@'%' identified with mysql_native_password by 'user';
GRANT ALL PRIVILEGES ON login.* TO 'user'@'%';
use login;
CREATE TABLE login.usuario (
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    confirmar_senha VARCHAR(255) NOT NULL
);
select * from usuario;