function alertas() {
    var limites = {
        alerta: 5,
        perigo: 6,
        critico: 10
    };

    var fkAlerta = 1000;

    console.log(`Leitura sensor 1${listaLeituraSensores[0][2]}`);
    console.log(`Leitura sensor 2${listaLeituraSensores[1][2]}`);

    var somaBlocos = listaLeituraSensores[0][2] + listaLeituraSensores[1][2];
    var corAlerta = "#26AA24";
    var textoAlerta = "Sem possibilidade de alagamentos";

    if (somaBlocos >= limites.critico) {
        corAlerta = "#FF0000";
        textoAlerta = "Sinal crítico para alagamentos";
        fkAlerta = 1003;

    } else if (somaBlocos >= limites.perigo) {
        corAlerta = "#FF810A";
        textoAlerta = "Risco real de alagamentos";
        fkAlerta = 1002;

    } else if (somaBlocos >= limites.alerta) {
        corAlerta = "#F7CB18";
        textoAlerta = "Atenção, possível alagamento";
        fkAlerta = 1001;
    }

    alerta_kpi.style.backgroundColor = corAlerta;
    alerta_texto.innerHTML = textoAlerta;

    fetch("/dashboard/alertas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkAlertaServer: fkAlerta,
            idLeituraServer: listaLeituraSensores[3][2],
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN()!")

        if (resposta.ok) {
            console.log("Alerta registrado");
            console.log(resposta);

            resposta.json().then(json => {
                console.log(JSON.stringify(json));
            });

        } else {
            console.log("Houve um erro ao registrar o alerta!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}
