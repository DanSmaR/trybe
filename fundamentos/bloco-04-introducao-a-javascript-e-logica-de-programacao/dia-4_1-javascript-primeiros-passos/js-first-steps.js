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