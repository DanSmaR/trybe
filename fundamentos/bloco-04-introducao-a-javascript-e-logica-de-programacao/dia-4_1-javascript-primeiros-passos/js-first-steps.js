// 1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
/*
const a = 12;
const b = 34;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;
*/
//*************************************************************************************************************************** */

// 2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
/*
const num1 = 78;
const num2 = 77;

if (num1 > num2) {
  console.log('O maior eh ' + num1);
} else if (num2 > num1) {
  console.log('O maior eh ' + num2);
} else console.log('Os numeros sao iguais')
*/
//******************************************************************************************************************* */

// 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
/*
const numA = 12;
const numB = 16;
const numC = 15;

if (numA > numB || numA > numC) {
  console.log('O maior eh ' + numA);
} else if (numB > numC) {
  console.log('O maior eh ' + numB);
} else console.log('O maior eh ' + numC);
*/
// *************************************************************************************************************************

// 4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
/*
const numSignal = 0;

if (numSignal > 0) {
  console.log('Eh positivo');
} else if (numSignal < 0) {
  console.log('Eh negativo');
} else console.log('Eh zero');
*/

// ****************************************************************************************************************************

/* 5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

  - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  - Um ângulo será considerado inválido se não tiver um valor positivo.
*/
/*
const anguloTriangulo1 = 20;
const anguloTriangulo2 = 50;
const anguloTriangulo3 = -80;

if (anguloTriangulo1 > 0 && anguloTriangulo2 > 0 && anguloTriangulo3 > 0) {
  if ((anguloTriangulo1 + anguloTriangulo2 + anguloTriangulo3) == 180) {
    console.log(true);
  } else console.log(false);
} else console.log(false);

*/
// *************************************************************************************************************************

/* 6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

    - Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    - Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
    - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    - Exemplo: bishop (bispo) -> diagonals (diagonais)
*/
/*
let pecaXadrez = "Cavalo";
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
 case "bispo":
  console.log("diagonais");
  break;
 case "rei":
  console.log("Uma casa em qualquer direcao");
  break;
 case "dama":
  console.log("mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
  break;
 case "torre":
  console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
  break;
 case "cavalo":
  console.log("“um-dois” ou “em L”");
  break;
 case "peao":
  console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
  break;

 default:
  break;
}
*/

// **************************************************************************************************************************************

/**
 * 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: 
 * 
    Porcentagem >= 90 -> A
    Porcentagem >= 80 -> B
    Porcentagem >= 70 -> C
    Porcentagem >= 60 -> D
    Porcentagem >= 50 -> E
    Porcentagem < 50 -> F
    O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */

/**
const porcentagem = 77;

if (porcentagem > 100 || porcentagem < 0) {
  console.error('Erro. Deve ser maior que 0 e menor que 100');
} else if (porcentagem >= 90) {
  console.log('A');
} else if (porcentagem >= 80) {
  console.log('B');
} else if (porcentagem >= 70) {
  console.log('C');
} else if (porcentagem >= 60) {
  console.log('D');
} else if (porcentagem >= 50) {
  console.log('E');
} else {
  console.log('F');
}
*/

//*********************************************************************************************************** */

/**
 * 8 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
 * Bonus: use somente um if .
 */
/**
const numX = 13;
const numY = 31;
const numZ = 45;

if (numX % 2 == 0 || numY % 2 == 0 || numZ % 2 == 0) {
  console.log(true);
} else console.log(false);
*/

//***************************************************************************************************************** */

/**
 * 9 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
 * Bonus: use somente um if .
 */
/** 
const numX = 13;
const numY = 31;
const numZ = 45;

if (numX % 2 != 0 || numY % 2 != 0 || numZ % 2 != 0) {
  console.log(true);
} else console.log(false);
*/
//***************************************************************************************************************** */

/** 
 * 10 Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores,       calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

      Atente que, sobre o custo do produto, incide um imposto de 20%.
      Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
      O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
        valorCustoTotal = valorCusto + impostoSobreOCusto
        lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */

/**
const valorVenda = 2000;
const valorCusto = 1500;
const taxa = 0.2;
const totalVendas = 1000;

if (valorVenda < 0 || valorCusto < 0 || totalVendas < 0) {
  console.error("Valor menor que 0");
} else {
  let custoTotal = valorCusto * (1 + taxa);
  let lucroUnit = valorVenda - valorCusto;
  let lucroTotal = totalVendas * lucroUnit;
  console.info('Lucro Total = ' + lucroTotal);
}
 */

// ***********************************************************************************************************

/**
 * 11
 * 
    Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

    A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
        INSS (Instituto Nacional do Seguro Social)
            Salário bruto até R$ 1.556,94: alíquota de 8%
            Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
            Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
            Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
        IR (Imposto de Renda)
            Até R$ 1.903,98: isento de imposto de renda
            De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
            De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
            De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
            Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

    O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
        R$ 2.670,00: salário com INSS já deduzido;
        7.5%: alíquota de imposto de renda;
        R$ 142,80 parcela a se deduzir do imposto.
    Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? 
 */

const salarioBruto = 1000;
let salarioBase = 0;
let salarioLiquido = 0;
let taxaINSS = 0;
let taxaIR = 0;
let parcelaDeduzir = 0;

if (salarioBruto > 5189.82) taxaINSS = 570.88;
else if (salarioBruto > 2594.92) taxaINSS = salarioBruto * 0.11;
else if (salarioBruto > 1556.94) taxaINSS = salarioBruto * 0.09;
else taxaINSS = salarioBruto * 0.08;

salarioBase = salarioBruto - taxaINSS;

if (salarioBase > 4664.68) {
  taxaIR = salarioBase * 0.275;
  parcelaDeduzir = 869.36;
} else if (salarioBase > 3751.05) {
  taxaIR = salarioBase * 0.225;
  parcelaDeduzir = 636.13;
} else if (salarioBase > 2826.65) {
  taxaIR = salarioBase * 0.15;
  parcelaDeduzir = 354.80;
} else if (salarioBase > 1903.98) {
  taxaIR = salarioBase * 0.075;
  parcelaDeduzir = 142.80;
}

salarioLiquido = salarioBase - (taxaIR - parcelaDeduzir);
console.info(salarioLiquido);