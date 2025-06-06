function converteDolarParaReal(dolar, real) {
    let dolar = 4.80;
    let real = parseFloat(prompt('Insira um valor em reais para ser convertido para dólar'));
    let valorConvertido = real * dolar;
    return valorConvertido;
}

console.log(converteDolarParaReal());