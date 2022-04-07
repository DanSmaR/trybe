//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para: 

const a = 12;
const b = 34;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

//*************************************************************************************************************************** */

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const num1 = 35;
const num2 = 78;

if (num1 > num2) {
  console.log('O maior eh ' + num1);
} else if (num2 > num1) {
  console.log('O maior eh ' + num2);
} else console.log('Os numeros sao iguais')
