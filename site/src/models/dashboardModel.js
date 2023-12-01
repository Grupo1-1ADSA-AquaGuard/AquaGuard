var database = require("../database/config");

function lerDados(idDashboard) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function lerDados(): ", idDashboard)
    var instrucao = `
    select l.leitura, s.id_sensor , s.fk_empresa empresa, s.statusSensor from leiturasensores l right join sensor s on s.id_sensor = l.fk_sensor;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};

module.exports = {
    lerDados
}