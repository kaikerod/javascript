function converteDolarParaReal(valorEmDolar) {
    const taxaDolar = 4.80; // Taxa de câmbio atual
    const valorEmReal = valorEmDolar * taxaDolar;
    return valorEmReal.toFixed(2); // Retorna com 2 casas decimais
}

// Exemplo de uso
const valorDolar = parseFloat(prompt('Insira um valor em dólares para converter para reais:'));
const resultado = converteDolarParaReal(valorDolar);
console.log(`$${valorDolar} = R$${resultado}`);