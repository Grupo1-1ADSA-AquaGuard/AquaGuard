var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, email, fk_empresa as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nomeEmpresa, cnpj, nomeUsuario, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeUsuario, email, senha);
    
    var instrucao1 = `
    INSERT INTO dadosEmpresa (cnpj_empresa, nome_empresa) VALUES ('${cnpj}', '${nomeEmpresa}')
    
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    // let valoresInstrucao1 = database.executar(instrucao1);
    // var instrucao2 = `
    //     INSERT INTO usuarioEmpresa (id_usuario, nome_usuario, email_usuario, tipo_usuario, senha_usuario, fk_empresa) VALUES (1, '${nomeUsuario}', '${email}', 'admin', '${senha}', 1);
    // `;
    // console.log("Executando a instrução SQL: \n" + instrucao2);
    return database.executar(instrucao1);
}

module.exports = {
    autenticar,
    cadastrar
};