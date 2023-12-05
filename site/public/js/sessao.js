// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var tipoUsuario = sessionStorage.TIPO_USUARIO;
    
    var div_usuario = document.getElementById("usuario")
    var div_dadosEmpresa = document.getElementById("dadosempresa")

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null && tipoUsuario != null) {
        b_usuario.innerHTML = nome;

        if (tipoUsuario == 'visualizador' || tipoUsuario == 'Visualizador') {
            div_usuario.style.display = "none";
            div_dadosEmpresa.style.display = "none"
        }

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

