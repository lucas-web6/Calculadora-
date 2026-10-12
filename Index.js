let numero1;
let numero2;
let operacao;
let soma;
let subtracao;
let multiplicacao;
let divisao;
operacao = parseInt(prompt("Digite a operação desejada (1: soma, 2: subtração, 3: multiplicação, 4: divisão)"));
switch (operacao) {
case 1:
numero1 = parseFloat(prompt("Digite o primeiro número"));
numero2 = parseFloat(prompt("Digite o segundo número"));

soma = numero1 + numero2;
console.log("O resultado da Soma é  " + soma)
break;

case 2:
numero1 = parseFloat(prompt("Digite o primeiro número"));
numero2 = parseFloat(prompt("Digite o segundo número"));

subtracao = numero1 - numero2;

console.log("O resultado da Subtração é   " + subtracao);
break;
case 3:
numero1 = parseFloat(prompt("Digite o primeiro número"));
numero2 = parseFloat(prompt("Digite o segundo número"));
multiplicacao = numero1 * numero2;
console.log("O resultado da Multiplicação é "+ multiplicacao);
break;

case 4:
    numero1 = parseFloat(prompt("Digite o primeiro número"));
    numero2 = parseFloat(prompt("Digite o segundo número"));

    if (numero2 === 0) {
      console.log("Erro: não é possível dividir por zero");
    } else {
    divisao = numero1 / numero2;
      console.log("O resultado da divisão é " + divisao);
    }
    break;

  default:
    console.log("Operação inválida");
}
