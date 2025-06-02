function exibirNoConsole() {
   console.log("Olá, mundo!")
}

exibirNoConsole();

function inputNome() {
    let nome = 'Kaike'
    return console.log(`Olá, ${nome}!`);
}

inputNome();

let numero = parseInt(prompt('Digite um número para eu calcular o dobro! '));

function calcularDobro(numero) {
    return numero * 2;
}