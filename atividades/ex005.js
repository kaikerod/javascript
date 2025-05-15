let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

console.log('Boas Vindas');

let nome = prompt('Insira seu nome ');
console.log(`Olá ${nome}! `);

let valor1 = 5
let valor2 = 10
let resultado = (valor1 - valor2);

console.log(`A diferença entre ${valor1} e ${valor2} é de ${resultado}`);

let idade = prompt('Qual é a sua idade? ');

if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade');
}

let aleatorio = parseInt(Math.random() * 100 + 1);
console.log(aleatorio);