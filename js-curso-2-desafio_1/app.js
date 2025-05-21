let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function verificarClique() {
    console.log('O botão console foi clicado');
}

function exibirAlerta() {
    alert('Eu amo JS!');
}

function criarPergunta() {
    nomeCidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${nomeCidade} e lembrei de você!`)
}