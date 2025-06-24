function sortearNumero() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    for (let i = 0; i < quantidadeDeNumeros; i++) {
}
}

function sortearNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}