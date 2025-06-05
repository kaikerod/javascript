function calcularImc() {
    let peso = parseFloat(prompt('Qual o é o seu peso corporal em KG? '));
    let altura = parseFloat(prompt('Qual a sua altura em metros?'));
    return
}

let imc = peso / (altura * altura);
alert(`Seu IMC é de ${imc}!`);

calcularImc();