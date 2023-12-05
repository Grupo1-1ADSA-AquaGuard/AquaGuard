var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastroDadosEmpresa", function (req, res) {
    usuarioController.cadastroDadosEmpresa(req, res);
})

router.post("/cadastroUsuarioEmpresa", function (req, res) {
    usuarioController.cadastroUsuarioEmpresa(req, res);
})

router.post("/buscasUsuariosEmpresa", function (req, res) {
    usuarioController.buscasUsuariosEmpresa(req, res);
});

router.post("/numUsuarios", function (req, res) {
    usuarioController.numUsuarios(req, res);
});

router.delete("/deletar", function (req, res) {
    usuarioController.deletar(req, res);
});

module.exports = router;