function exibirNoConsole() {
   console.log("Olá, mundo!")
}

exibirNoConsole();


///////////////////////////////////////////////////////////


function inputNome() {
    let nome = 'Kaike'
    return console.log(`Olá, ${nome}!`);
}

inputNome();


///////////////////////////////////////////////////////////


let numero = parseInt(prompt('Digite um número para eu calcular o dobro! '));

function calcularDobro(numero) {
    return numero * 2;
}

let resultado = calcularDobro(numero);
console.log(calcularDobro(numero));


///////////////////////////////////////////////////////////


function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let media = calcularMedia(4, 7, 10);
console.log(media);


///////////////////////////////////////////////////////////


function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);