CREATE DATABASE AquaGuard2;
USE AquaGuard2;

CREATE TABLE usuarioEmpresa (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario varchar(60) not null,
    email_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(50) NOT NULL,
    fk_empresa int,
    constraint fk_emp foreign key (fk_empresa) references dadosEmpresa (id_empresa)
);

CREATE TABLE dadosEmpresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    cnpj_empresa  FLOAT UNIQUE,
	nome_empresa VARCHAR(40),
    email_empresa VARCHAR(100),
    fk_endereco int,
    constraint fk_ende foreign key (fk_endereco) references enderecoEmpresa (id_endereco)
);
    
CREATE TABLE enderecoEmpresa(
	id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    cep_empresa INT,
    rua_empresa VARCHAR(50),
    bairro_empresa VARCHAR (40),
    municipio_empresa VARCHAR(40),
    complemento_empresa VARCHAR(20)
);

    
CREATE TABLE leituraSensores (
	id_sensores INT PRIMARY KEY AUTO_INCREMENT,
	sensor1 INT,
    constraint chkSensor1 check (sensor1 in (0, 1)),
    sensor2 INT,
	constraint chkSensor2 check (sensor2 in (0, 1)),
    dt_atual DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_alerta int,
    constraint fk_alert foreign key (fk_alerta) references alertas (id_alerta)
);

create table alertas (
id_alerta int primary key auto_increment,
alerta_sensor varchar(45)
);
   
-- INSERT 
INSERT INTO usuarioEmpresa VALUES
(null, 'Maria Eduarda Guardião', 'maria.guardiao@sptech.school', '12345', 7),
(null, 'Heloisa Caires Salgado', 'heloisa.salgado@sptech.school', '54321', 6),
(null, 'Luan Gomes', 'luan.araujo@sptech.school', '67890', 5),
(null, 'Igor Euclides Moura', 'igor.moura@sptech.school', '09876', 4),
(null, 'Jean Rocha Santos', 'jean.santos@sptech.school', '23456', 3),
(null, 'Giovanni Santos', 'giovanni.santos@sptech.school', '76543', 2),
(null, 'Gabriel Henrique Barreto', 'gabriel.barreto@sptech.school', '89012', 1);

INSERT INTO dadosEmpresa VALUES
(null, 93365395574574, 'Americanas', 'americanas@gmail.com', 1),
(null, 20156387000187, 'Assaí Atacadista', 'assaiatacadista@gmail.com',  2),
(null, 06808342000119, 'Carrefour', 'carrefou@gmail.com', 3),
(null, 10941266000192, 'Grupo Muffato', 'muffato@gmail.com', 4),
(null, 68148779000120, 'Sam´s Club', 'samsclub@gmail.com', 5),
(null, 04344358700014, 'Supermercado Dia', 'supermecadodia@gmail.com', 6),
(null, 04443587000165, 'Extra', 'extra@gmail.com', 7);

INSERT INTO enderecoEmpresa VALUES
(null, 76873064, 'Avenida Urupá', 'Boa Vista', 'Caruaru', 'A' ),
(null, 60192010, 'Rua Vilebaldo Aguiar', 'Santa Lúcia', 'Rio Branco', 'B'),
(null, 45822230, 'Rua São Lourenço', 'Pedreira', 'Araraquara', 'C'),
(null, 69900046, 'Rua Floriano Peixoto', 'Rio Branco', 'Pricumã', 'D'),
(null, 69900400, 'Rua Alagoas', 'Bosque', 'Asa Norte', 'E'),
(null, 49067246, 'Porto Dantas', 'Fazendinha', 'Eldorado', 'F'),
(null, 81200080, 'Rua João Kososki', 'Operário', 'Glória', 'G');

INSERT INTO leituraSensores (sensor1, sensor2, fk_alerta) VALUES 
(0, 0, 1),
(1, 0, 2),
(1, 1, 3),
(0, 0, 1);

insert into alertas values
(null, 'Nível de água normal'),
(null, 'Nível de água subindo, atenção!'),
(null, 'Nível de água passou do segundo sensor!!');


-- SELECT com AS
SELECT u.nome_usuario as Nome, u.email_usuario AS Usuario, d.nome_empresa AS Empresa, e.cep_empresa 
from usuarioEmpresa as u join dadosEmpresa as d on fk_empresa = id_empresa join enderecoEmpresa as e on fk_endereco = id_endereco;
    
SELECT sensor1 AS 'Sensor de presença 1', sensor2 AS 'Sensor de presença 2', dt_atual AS 'Data e Hora', a.alerta_sensor as Alerta 
FROM leituraSensores join alertas as a on fk_alerta = id_alerta;





