let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// modo 1, crescente
for(let i = 1; i < numbers.length; i += 1) {
  console.log('\n[' + i + '] ');
  let indexJArray = [];
  for (let j = 0; j < i; j += 1) {
    indexJArray.push(j);
  }
  console.log(indexJArray);
}
/**
 * Output
 * 
 *  i         index j
 * [1] [0]
 * [2] [0, 1]
 * [3] [0, 1, 2]
 * [4] [0, 1, 2, 3]
 * [5] [0, 1, 2, 3, 4]
 * [6] [0, 1, 2, 3, 4, 5]
 * [7] [0, 1, 2, 3, 4, 5, 6]
 * [8] [0, 1, 2, 3, 4, 5, 6, 7]
 * [9] [0, 1, 2, 3, 4, 5, 6, 7, 8]
 */



// modo 2, decrescente, dessa vez i = 0
for(let i = 0; i < numbers.length -1; i += 1) {
  console.log('\n[' + i + '] ');
  let indexKArray = [];
  for (let j = 0; j < numbers.length - i - 1; j += 1) {
    indexKArray.push(j);
  }
  console.log(indexKArray);
}

/**
 * Output
 * 
 *  i         index j
 * [0] [0, 1, 2, 3, 4, 5, 6, 7, 8]
 * [1] [0, 1, 2, 3, 4, 5, 6, 7]
 * [2] [0, 1, 2, 3, 4, 5, 6]
 * [3] [0, 1, 2, 3, 4, 5]
 * [4] [0, 1, 2, 3, 4]
 * [5] [0, 1, 2, 3]
 * [6] [0, 1, 2]
 * [7] [0, 1] 
 * [8] [0] 
 */


// mode 3, i iniciando do final do array.

for(let i = numbers.length - 1; i > 0; i -= 1) {
  console.log('\n[' + i + '] ');
  let indexKArray = [];
  for (let j = 0; j < i; j += 1) {
    indexKArray.push(j);
  }
  console.log(indexKArray);
}

/** i         j 
 * [9] 0, 1, 2, 3, 4, 5, 6, 7, 8
 * [8] 0, 1, 2, 3, 4, 5, 6, 7
 * [7] 0, 1, 2, 3, 4, 5, 6,
   [6] 0, 1, 2, 3, 4, 5,
   [5] 0, 1, 2, 3, 4,
   [4] 0, 1, 2, 3,
   [3] 0, 1, 2,
   [2] 0, 1,
   [1] 0,
 */

/**
 * 1 Ordene o array numbers em ordem crescente e imprima seus valores; 
 */

// modo 2, decrescente
for(let i = 0; i < numbers.length - 1; i += 1) {
  console.log('\n[' + i + '] ');
  let indexKArray = [];

  for (let j = 0; j < numbers.length - i - 1; j += 1) {
    indexKArray.push(j);
    
    if (numbers[j] > numbers[j + 1]) {
      let aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux;
    }
  }
  console.log(indexKArray);
}
console.log(numbers);

/**
 * 2 Ordene o array numbers em ordem decrescente e imprima seus valores;
 */

for(let i = 0; i < numbers.length - 1; i += 1) {
  for(let j = 0; j < numbers.length - i - 1; j += 1) {
    if (numbers[j] < numbers[j + 1]) {
      const aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux;
    }
  }
}
console.log(numbers);

/**
 * 3 Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: 
 * 
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
 */

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = []

for(let i = 0; i < numbers.length; i += 1) {
  if (i === numbers.length - 1) {
    newArray[i] = numbers[i] * 2;
    break;
  }

  newArray[i] = numbers[i] * numbers[i + 1];
}
console.log('Novo Array: ' + newArray);