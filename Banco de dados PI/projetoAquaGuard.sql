CREATE DATABASE AquaGuard;
USE AquaGuard;

CREATE TABLE usuarioEmpresa (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    email_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(50) NOT NULL);

CREATE TABLE dadosEmpresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    cnpj_empresa  FLOAT UNIQUE,
	nome_empresa VARCHAR(40),
    email_empresa VARCHAR(100));
    
CREATE TABLE enderecoEmpresa(
	id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    cep_empresa INT,
    rua_empresa VARCHAR(50),
    bairro_empresa VARCHAR (40),
    municipio_empresa VARCHAR(40),
    complemento_empresa VARCHAR(20));

    
CREATE TABLE leituraSensores (
	id_sensores INT PRIMARY KEY AUTO_INCREMENT,
	sensor1 INT,
    sensor2 INT,
    dt_atual DATETIME DEFAULT CURRENT_TIMESTAMP);
   
-- INSERT 
INSERT INTO usuarioEmpresa VALUES
(null, 'maria.guardiao@sptech.school', '12345'),
(null, 'heloisa.salgado@sptech.school', '54321'),
(null, 'luan.araujo@sptech.school', '67890'),
(null, 'igor.moura@sptech.school', '09876'),
(null, 'jean.santos@sptech.school', '23456'),
(null, 'giovanni.santos@sptech.school', '76543'),
(null, 'gabriel.barreto@sptech.school', '89012');

INSERT INTO dadosEmpresa VALUES
(null, 93365395574574, 'Americanas', 'americanas@gmail.com'),
(null, 20156387000187, 'Assaí Atacadista', 'assaiatacadista@gmail.com'),
(null, 06808342000119, 'Carrefour', 'carrefou@gmail.com'),
(null, 10941266000192, 'Grupo Muffato', 'muffato@gmail.com'),
(null, 68148779000120, 'Sam´s Club', 'samsclub@gmail.com'),
(null, 04344358700014, 'Supermercado Dia', 'supermecadodia@gmail.com'),
(null, 04443587000165, 'Extra', 'extra@gmail.com');

INSERT INTO enderecoEmpresa VALUES
(null, 76873064, 'Avenida Urupá', 'Boa Vista', 'Caruaru', 'A' ),
(null, 60192010, 'Rua Vilebaldo Aguiar', 'Santa Lúcia', 'Rio Branco', 'B'),
(null, 45822230, 'Rua São Lourenço', 'Pedreira', 'Araraquara', 'C'),
(null, 69900046, 'Rua Floriano Peixoto', 'Rio Branco', 'Pricumã', 'D'),
(null, 69900400, 'Rua Alagoas', 'Bosque', 'Asa Norte', 'E'),
(null, 49067246, 'Porto Dantas', 'Fazendinha', 'Eldorado', 'F'),
(null, 81200080, 'Rua João Kososki', 'Operário', 'Glória', 'G');

INSERT INTO leituraSensores (sensor1, sensor2) VALUES 
(0,0),
(1,0),
(1,1);

-- SELECT normal
SELECT * FROM usuarioEmpresa;
SELECT * FROM dadosEmpresa;
SELECT * FROM enderecoEmpresa;
SELECT * FROM leituraSensores; --

-- SELECT com AS
SELECT id_usuario AS ID, email_usuario AS Email, senha_usuario AS Senha FROM usuarioEmpresa;

SELECT cnpj_empresa AS CNPJ, nome_empresa AS Nome, email_empresa AS Email FROM dadosEmpresa; 

SELECT cep_empresa AS CEP, rua_empresa AS Rua, bairro_empresa AS Bairro, 
	municipio_empresa AS Município, complemento_empresa AS Complemento FROM enderecoEmpresa;--
    
SELECT sensor1 AS 'Sensor de presença 1', sensor2 AS 'Sensor de presença 2', dt_atual AS 'Data e Hora' FROM leituraSensores;

-- SELECT com LIKE
SELECT * FROM usuarioEmpresa WHERE email_usuario LIKE 'g%';--
SELECT * FROM dadosEmpresa WHERE nome_empresa LIKE '%a';
SELECT * FROM enderecoEmpresa WHERE rua_empresa LIKE '%a_';
SELECT * FROM leituraSensores WHERE sensor1 = 1;

DROP TABLE usuarioEmpresa;
DROP TABLE dadosEmpresa;
DROP TABLE enderecoEmpresa;
DROP TABLE leituraSensores;

    