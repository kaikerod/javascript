alert('Bem vindo(a) ao jogo do numero secreto!');
let numeroSecreto = 5;
let chute = prompt('Escolha um numero entre 1 e 10');

if (chute == numeroSecreto) {
    console.log('Isso ai, voce descobriu o numero secreto (5)!');
} else {
    alert('Voce errou :(')
}