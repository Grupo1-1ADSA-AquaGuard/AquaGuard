CREATE DATABASE AquaGuard2;
USE AquaGuard2;

CREATE TABLE dadosEmpresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    cnpj_empresa CHAR(14) UNIQUE NOT NULL,
	nome_empresa VARCHAR(45) NOT NULL,
    email_empresa VARCHAR(100),
    telefone_empresa CHAR(11),
    senha_empresa VARCHAR(20) NOT NULL
);

CREATE TABLE usuarioEmpresa (
    id_usuario INT AUTO_INCREMENT,
    nome_usuario VARCHAR(60) NOT NULL UNIQUE,
    email_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(50) NOT NULL,
    fk_empresa INT,
    CONSTRAINT fk_emp FOREIGN KEY (fk_empresa) REFERENCES dadosEmpresa(id_empresa),
    PRIMARY KEY (id_usuario, fk_empresa)
) AUTO_INCREMENT = 10;

CREATE TABLE enderecoEmpresa(
	id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    cep_empresa INT,
    logradouro_empresa VARCHAR(100),
    numero_empresa INT,
    bairro_empresa VARCHAR (40),
    municipio_empresa VARCHAR(40),
    complemento_empresa VARCHAR(20),
    fk_empresa INT,
    CONSTRAINT fkEmpresa FOREIGN KEY (fk_empresa) REFERENCES dadosEmpresa(id_empresa)
) AUTO_INCREMENT = 50;

CREATE TABLE sensor (
	id_sensor INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45),
    marca VARCHAR(45),
    statusSensor VARCHAR(15),
    fk_endereco INT,
	CONSTRAINT chkStatus CHECK (statusSensor in ('Ativo', 'Inativo', 'Manutenção')),
    CONSTRAINT fkEndereco FOREIGN KEY (fk_endereco) REFERENCES enderecoEmpresa(id_endereco)
) AUTO_INCREMENT = 100;

CREATE TABLE alertas (
	id_alerta INT PRIMARY KEY AUTO_INCREMENT,
	alerta_sensor VARCHAR(45)
) AUTO_INCREMENT = 1000;

CREATE TABLE leituraSensores (
	id_leitura INT AUTO_INCREMENT,
	leitura INT,
    dt_atual DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_sensor INT, 
    fk_alerta INT,
	CONSTRAINT chkLeitura CHECK (leitura IN (0, 1)),
	CONSTRAINT fkSensor FOREIGN KEY (fk_sensor) REFERENCES sensor(id_sensor),
    CONSTRAINT fk_alert FOREIGN KEY (fk_alerta) REFERENCES alertas(id_alerta),
    PRIMARY KEY (id_leitura, fk_sensor)
);


-- ------------------------------------------------------------------ INSERT -----------------------------------------------------------------------------------
INSERT INTO dadosEmpresa VALUES
(null, '93365395574574', 'Americanas', 'americanas@gmail.com', '11984205722', '8541@america'),
(null, '20156387000187', 'Assaí Atacadista', 'assaiatacadista@gmail.com', '11925401364', '@556_assai'),
(null, '06808342000119', 'Carrefour', 'carrefou@gmail.com', '21982048830', '_71000_carrefas'),
(null, '10941266000192', 'Grupo Muffato', 'muffato@gmail.com', '61923610052', 'hdjs@201563'),
(null, '68148779000120', 'Sam´s Club', 'samsclub@gmail.com', '85931237095', '772896@#dgsh'),
(null, '04344358700014', 'Supermercado Dia', 'supermecadodia@gmail.com', '11921108662', 'dia__741110'),
(null, '04443587000165', 'Extra', 'extra@gmail.com', '13925015889', '0266extra$$');
select * from dadosEmpresa;

INSERT INTO usuarioEmpresa VALUES
(null, 'Maria Eduarda Guardião', 'maria.guardiao@sptech.school', '12@345', 7),
(null, 'Heloisa Caires Salgado', 'heloisa.salgado@sptech.school', '5432@1', 6),
(null, 'Kely Jássica', 'kely.alipaz@sptech.school', '@@67890', 5),
(null, 'Vitor Santos Tigre', 'vitor.tigre@sptech.school', '098_76_', 4),
(null, 'Marcio Henrique', 'marcio.henrique@sptech.school', '2_345@6', 3),
(null, 'Gustavo Antunes', 'gustavo.antunes@sptech.school', '76_543#', 2),
(null, 'Gabriel Henrique Barreto', 'gabriel.barreto@sptech.school', '89@012', 1),
(null, 'Jean Santos Rocha', 'jean.rocha@sptech.school', '@71415@', 1);
select * from usuarioEmpresa;

INSERT INTO enderecoEmpresa VALUES
(null, 76873064, 'Avenida Urupá', 84, 'Boa Vista', 'Caruaru', 'A', 1),
(null, 60192010, 'Rua Vilebaldo Aguiar', 74, 'Santa Lúcia', 'Rio Branco', 'B', 2),
(null, 45822230, 'Rua São Lourenço', 17, 'Pedreira', 'Araraquara', 'C', 3),
(null, 69900046, 'Rua Floriano Peixoto', 365, 'Rio Branco', 'Pricumã', null, 4),
(null, 69900400, 'Rua Alagoas', 451, 'Bosque', 'Asa Norte', null, 5),
(null, 49067246, 'Porto Dantas', 215, 'Fazendinha', 'Eldorado', 'F', 6),
(null, 81200080, 'Rua João Kososki', 58, 'Operário', 'Glória', null, 7);
select * from enderecoEmpresa;

insert sensor(tipo, marca, statusSensor, fk_endereco) values
('Chave', 'TCRT5000', 'Ativo', 50),
('Chave', 'TCRT5000', 'Ativo', 50),
('Chave', 'TCRT5000', 'Manutenção', 51),
('Chave', 'TCRT5000', 'Manutenção', 51),
('Chave', 'TCRT5000', 'Inativo', 52),
('Chave', 'TCRT5000', 'Inativo', 52),
('Chave', 'TCRT5000', 'Ativo', 53),
('Chave', 'TCRT5000', 'Ativo', 53),
('Chave', 'TCRT5000', 'Manutenção', 54),
('Chave', 'TCRT5000', 'Manutenção', 54),
('Chave', 'TCRT5000', 'Ativo', 55),
('Chave', 'TCRT5000', 'Ativo', 55),
('Chave', 'TCRT5000', 'Ativo', 56),
('Chave', 'TCRT5000', 'Ativo', 56);
select * from sensor;

insert into alertas values
(null, 'Nível de água normal'),
(null, 'Nível de água subindo, atenção!'),
(null, 'Nível de água passou do segundo sensor!!');
select * from alertas;

INSERT INTO leituraSensores (leitura, fk_sensor, fk_alerta) VALUES 
(0, 100, 1000),
(0, 101, 1000),
(0, 102, 1000),
(0, 103, 1000),
(1, 104, 1001),
(0, 105, 1000),
(1, 106, 1001),
(1, 107, 1002),
(0, 108, 1000),
(0, 109, 1000),
(1, 110, 1001),
(1, 111, 1002),
(1, 112, 1001),
(0, 113, 1000);
select * from leituraSensores;


-- ------------------------------------------------------------------ SELECT -----------------------------------------------------------------------------------
SELECT u.nome_usuario as Usuário, u.email_usuario as EmailUsuário, e.nome_empresa as Empresa, e.telefone_empresa as TelefoneEmpresa
  FROM usuarioEmpresa u JOIN dadosEmpresa e ON u.fk_empresa = e.id_empresa;
  
SELECT u.nome_usuario as Usuário, u.email_usuario as EmailUsuário, e.nome_empresa as Empresa, e.telefone_empresa as TelefoneEmpresa
  FROM usuarioEmpresa u JOIN dadosEmpresa e ON u.fk_empresa = e.id_empresa where e.id_empresa = 1;
    
SELECT s.tipo as TipoSensor, 
	s.statusSensor as 'Status', 
    ls.leitura as Leitura, 
    ls.dt_atual as 'Data', 
    ls.fk_alerta as Alerta, 
    e.fk_empresa as Empresa
 FROM sensor s 
 JOIN leituraSensores ls ON s.id_sensor = ls.fk_sensor
 JOIN enderecoEmpresa e ON s.fk_endereco = e.id_endereco;

SELECT s.tipo as TipoSensor, 
	s.statusSensor as 'Status', 
    ls.leitura as Leitura, 
    ls.dt_atual as 'Data', 
    ls.fk_alerta as Alerta, 
    e.fk_empresa as Empresa
 FROM sensor s 
 JOIN leituraSensores ls ON s.id_sensor = ls.fk_sensor
 JOIN enderecoEmpresa e ON s.fk_endereco = e.id_endereco
 WHERE e.fk_empresa = 1;

SELECT s.tipo as TipoSensor, 
	s.statusSensor as 'Status', 
    ls.leitura as Leitura, 
    ls.dt_atual as 'Data', 
    a.alerta_sensor as Alerta, 
    e.fk_empresa as Empresa
 FROM sensor s 
 JOIN leituraSensores ls ON s.id_sensor = ls.fk_sensor
 JOIN enderecoEmpresa e ON s.fk_endereco = e.id_endereco
 JOIN alertas a ON a.id_alerta = ls.fk_alerta;

