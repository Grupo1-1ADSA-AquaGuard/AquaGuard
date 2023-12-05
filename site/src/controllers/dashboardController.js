var dashboardModel = require("../models/dashboardModel");

// function lerDados(req, res) {
//     var idDashboard = req.params.idDashboard;

//     dashboardModel.lerDados(idDashboard)
//         .then(
//             function (resultadoLerDados) {
//                 console.log(`Entrou no .then do dashboardController.js`);

//                 if (resultadoLerDados.length > 0) {
//                     res.status(200).json(resultadoLerDados);
//                 } else {
//                     res.status(204).send("Nenhum resultado encontrado!");
//                 }
//             }
//         ).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Erro ao buscar dados da Dashboard! dashboardController.js");
//                 console.log(erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         )
// }

function sensoresEmpresa(req, res) {
    console.log("Estou no dashboard controller");
    var empresa = req.body.fkServer;

    dashboardModel.sensoresEmpresa(empresa)
        .then(
            function (resultadoSensores) {
                console.log(`\nResultados encontrados: ${resultadoSensores.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoSensores)}`); // transforma JSON em String

                if (resultadoSensores.length != 1) {
                    console.log(resultadoSensores);
                    res.json({
                        sensor1: resultadoSensores[0].id_sensor,
                        sensor2: resultadoSensores[1].id_sensor,
                    });

                } else {
                    res.status(403).send("Sensores não localizados");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao procurar os sensores! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarUltimasMedidas(req, res) {

    var idSensor1 = req.params.idSensor1;
    var idSensor2 = req.params.idSensor2;
    var limite_linhas = req.params.limitSelect;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashboardModel.buscarUltimasMedidas(idSensor1, idSensor2, limite_linhas).then(function(resultado) {
        if (resultado.length > 0) {
            console.log("Resultado do banco")
            console.log(resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    sensoresEmpresa,
    buscarUltimasMedidas
}