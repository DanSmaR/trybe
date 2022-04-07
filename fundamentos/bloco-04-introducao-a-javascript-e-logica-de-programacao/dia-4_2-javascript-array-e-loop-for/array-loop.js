let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 

for(let number of numbers) {
  console.log(number);
}
console.log('****************************************************');

// *******************************************************************************

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 

let sumArray = 0

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

// *********************************************************************************