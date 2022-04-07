let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 

for(let number of numbers) {
  console.log(number);
}
console.log('****************************************************');

// *******************************************************************************

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 

let sumArray = 0;

for(let number of numbers) {
  sumArray += number;
}

console.log('Soma dos elementos: ' + sumArray);
console.log('****************************************************');

// ********************************************************************************

// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
const mediaArray = sumArray / numbers.length;
console.log('Media do Array numbers: ' + mediaArray);
console.log('****************************************************');

// ********************************************************************************

/**
4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 */

if (mediaArray > 20) console.log('Valor maior que 20');
else console.log('valor menor ou igual a 20');
console.log('****************************************************');
// ****************************************************************************

// 5 Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let higherValue = 0;

for(let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > higherValue) {
    higherValue = numbers[i];
  }
}

console.log('Maior valor: ' + higherValue);
console.log('****************************************************');

// ********************************************************************************