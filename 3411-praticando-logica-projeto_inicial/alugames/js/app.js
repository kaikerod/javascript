function alterarStatus(game) {
    // Encontrar o item do jogo clicado
    const gameItem = document.getElementById(`game-${game.id}`);
    const button = gameItem.querySelector('.dashboard__item__button');
    const imageContainer = gameItem.querySelector('.dashboard__item__img');
    
    // Verificar se o jogo está alugado ou não
    if (button.textContent === 'Alugar') {
        // Alugar o jogo
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        imageContainer.classList.add('dashboard__item__img--rented');
    } else {
        // Devolver o jogo
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
        imageContainer.classList.remove('dashboard__item__img--rented');
    }
}

// Definir os objetos dos jogos
const monopoly = { id: 1 };
const ticketToRide = { id: 2 };
const takenoko = { id: 3 };