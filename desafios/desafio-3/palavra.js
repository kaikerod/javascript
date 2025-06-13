let palavraUm = ['Rebeca', 'eu', 'te', 'amo!'];
let palavraDois = ['Ass:', 'Kaike!'];


function juntarTodasPalavras(array1, array2) {
    return array1.join(' ') + ' ' + array2.join(' ');
}

console.log(juntarTodasPalavras(palavraUm, palavraDois)); // Saída: "Rebeca eu te amo! Ass: Kaike!"
