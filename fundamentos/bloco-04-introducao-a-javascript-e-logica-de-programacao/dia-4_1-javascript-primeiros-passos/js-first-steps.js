//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: 
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

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
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

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
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

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 
/*
const numSignal = 0;

if (numSignal > 0) {
  console.log('Eh positivo');
} else if (numSignal < 0) {
  console.log('Eh negativo');
} else console.log('Eh zero');
*/

// ****************************************************************************************************************************

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloTriangulo1 = 20;
const anguloTriangulo2 = 50;
const anguloTriangulo3 = -80;

if (anguloTriangulo1 > 0 && anguloTriangulo2 > 0 && anguloTriangulo3 > 0) {
  if ((anguloTriangulo1 + anguloTriangulo2 + anguloTriangulo3) == 180) {
    console.log(true);
  } else console.log(false);
} else console.log(false);


// *************************************************************************************************************************

// 