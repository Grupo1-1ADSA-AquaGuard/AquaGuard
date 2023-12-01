var usuarioModel = require("../models/usuarioModel");

function lerDados() {
    var idDashboard = req.params.idDashboard;

    dashboardModel.lerDados(idDashboard)
        .then(
            function (resultadoLerDados) {
                console.log(`Entrou no .then do dashboardController.js`);

                if (resultadoLerDados.length > 0) {
                    res.status(200).json(resultadoLerDados);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro ao buscar dados da Dashboard! dashboardController.js");
                console.log(erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

module.exports = {
    lerDados
}