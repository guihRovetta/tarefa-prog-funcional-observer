function construtorObservador() {
    var evento = {
        cont: 1
    };
    var listaObservador = [];
    var obj = {
        contar: function () {
            listaObservador.forEach(function (item) {
                item(evento);
            });
            evento.cont++;
        }
    };

    function adicionarOuvinte(funcao) {
        listaObservador.push(funcao);
    }

    obj.adicionarOuvinte = adicionarOuvinte;

    return obj;
}

function observador(evento) {
    console.log('Contando - ' + evento.cont);
}

function observadorDiferente(evento) {
    console.log('Contando diferente - ' + evento.cont);
}

var contObservador = construtorObservador();

contObservador.adicionarOuvinte(observador);
contObservador.adicionarOuvinte(observadorDiferente);

contObservador.contar();
contObservador.contar();