alert('Bem vindo(a) ao jogo do numero secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Isso ai, voce descobriu o numero secreto! ${numeroSecreto}`);
} else {
    alert('Voce errou :(')
}