var database = require("../database/config");

function lerDados(idDashboard) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function lerDados(): ", idDashboard)
    var instrucao = `
    select l.leitura, s.id_sensor , s.fk_empresa empresa, s.statusSensor from leiturasensores l right join sensor s on s.id_sensor = l.fk_sensor;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

var database = require("../database/config")

function sensoresEmpresa(empresa) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function sensores(): ", empresa)
    var instrucao = `
        SELECT id_sensor FROM sensor WHERE fk_empresa = ${empresa}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function buscarUltimasMedidas(idSensor1, idSensor2, limite_linhas) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas(): ", idSensor1, idSensor2);

    var instrucao = `(SELECT fk_sensor, id_leitura, leitura, DATE_FORMAT(dt_atual,'%H:%i:%s') AS momento
                        FROM leituraSensores
                        WHERE fk_sensor = ${idSensor1}
                        order by id_leitura desc
                        limit ${limite_linhas})
                    UNION
                    (SELECT fk_sensor, id_leitura, leitura, DATE_FORMAT(dt_atual,'%H:%i:%s') AS momento
                        FROM leituraSensores
                        WHERE fk_sensor = ${idSensor2}
                        order by id_leitura desc
                        limit ${limite_linhas})`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function buscarMedidasEmTempoReal(idSensor1, idSensor2) {

    instrucaoSql = ''

    instrucaoSql = `(SELECT fk_sensor, id_leitura, leitura, DATE_FORMAT(dt_atual,'%H:%i:%s') AS momento
        FROM leituraSensores
        WHERE fk_sensor = ${idSensor1}
        order by id_leitura desc
        limit 1)
    UNION
    (SELECT fk_sensor, id_leitura, leitura, DATE_FORMAT(dt_atual,'%H:%i:%s') AS momento
        FROM leituraSensores
        WHERE fk_sensor = ${idSensor2}
        order by id_leitura desc
        limit 1)`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    lerDados,
    sensoresEmpresa,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}