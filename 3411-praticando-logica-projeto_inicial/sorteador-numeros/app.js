function sortearNumero() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Validação para evitar loop infinito
    let intervaloDisponivel = ate - de + 1;
    if (quantidadeDeNumeros > intervaloDisponivel) {
        alert(`Erro: Você solicitou ${quantidadeDeNumeros} números, mas o intervalo de ${de} a ${ate} só possui ${intervaloDisponivel} números únicos.`);
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = sortearNumeros(de, ate);

        while (sorteados.includes(numero)) {
            numero = sortearNumeros(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotaoReiniciar();
}

function sortearNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
}