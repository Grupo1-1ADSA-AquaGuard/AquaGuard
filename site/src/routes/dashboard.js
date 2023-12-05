var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js
// router.post("/lerDados/:idDashboard", function (req, res) {
//     dashboardController.lerDados(req, res);
// })

router.post("/sensoresEmpresa", function (req, res) {
    dashboardController.sensoresEmpresa(req, res);
})

router.get("/ultimas/:idSensor1/:idSensor2/:limitSelect", function (req, res) {
    dashboardController.buscarUltimasMedidas(req, res);
})

module.exports = router;