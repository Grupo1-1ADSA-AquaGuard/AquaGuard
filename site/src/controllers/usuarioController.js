var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].id_usuario,
                            email: resultadoAutenticar[0].email_usuario,
                            nome: resultadoAutenticar[0].nome_usuario,
                            fk_empresa: resultadoAutenticar[0].fk_empresa,
                            nome_empresa: resultadoAutenticar[0].nome_empresa,
                            tipoUsuario: resultadoAutenticar[0].tipo_usuario
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");

                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var cnpj = req.body.cnpjServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer

    // Faça as validações dos valores
    if (nomeEmpresa == undefined) {
        res.status(400).send("O nome da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("O cnpj está undefined!");
    } else if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeEmpresa, cnpj, nomeUsuario, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastroDadosEmpresa(req, res) {
    var telefoneEmpresa = req.body.telefoneEmpresaServer;
    var cepEmpresa = req.body.cepEmpresaServer;
    var numEmpresa = req.body.numEmpresaServer;
    var emailEmpresa = req.body.emailEmpresaServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    // Faça as validações dos valores
    if (telefoneEmpresa == undefined) {
        res.status(400).send("O telefone da empresa está undefined!");
    } else if (cepEmpresa == undefined) {
        res.status(400).send("O cep está undefined!");
    } else if (numEmpresa == undefined) {
        res.status(400).send("Seu número está undefined!");
    } else if (emailEmpresa == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastroDadosEmpresa(telefoneEmpresa, cepEmpresa, numEmpresa, emailEmpresa, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastroUsuarioEmpresa(req, res) {
    var nomeUsuario = req.body.nomeUsuarioServer;
    var emailUsuario = req.body.emailServer;
    var tipoUsuario = req.body.tipoUsuarioServer;
    var senhaUsuario = req.body.senhaServer;
    var fkEmpresa = req.body.fkEmpresaServer;


    // Faça as validações dos valores
    if (nomeUsuario == undefined) {
        res.status(400).send("O nome do usuário está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("O email do usuario está undefined!");
    } else if (tipoUsuario == undefined) {
        res.status(400).send("O tipo de usuário está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastroUsuarioEmpresa(nomeUsuario, emailUsuario, senhaUsuario, tipoUsuario, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscasUsuariosEmpresa(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer;

    usuarioModel.buscasUsuariosEmpresa(fkEmpresa)
        .then((resultado) => {

            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length > 0) {
                res.status(200).json(resultado);
                console.log(resultado);

            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function numUsuarios(req, res) {
    var fkEmpresa = req.body.fkEmpresaServer

    usuarioModel.numUsuarios(fkEmpresa)
        .then((resultado) => {

            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length == 1) {
                // res.status(200).json(resultado);
                console.log(resultado);

                res.json({
                    numUsuarios: resultado[0].numUsuarios
                });

            } else {
                res.status(204).json([]);
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as informações: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletar(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    usuarioModel.deletar(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    autenticar,
    cadastrar,
    cadastroDadosEmpresa,
    cadastroUsuarioEmpresa,
    buscasUsuariosEmpresa,
    numUsuarios,
    deletar
}