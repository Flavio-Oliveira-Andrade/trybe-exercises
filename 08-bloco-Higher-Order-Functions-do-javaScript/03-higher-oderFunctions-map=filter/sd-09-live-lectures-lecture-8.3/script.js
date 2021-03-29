const numbers = [2, 3, 4, 6, 8, 12, 24];

// Somando os números do array com for
let sumWithFor = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  sumWithFor = sumWithFor + numbers[index];
}

console.log(`O somatorio do array com for é ${sumWithFor}.`);

// Somando os números do array com reduce
const sumWithReduce = numbers.reduce((accumulator, currentValue) => {
  // O que vai retornar aqui é o valor atualizado do acumulador
  return accumulator + currentValue;
});

// 1 iteração: accumulator === 2 | currentValue === 3
// 2 iteração: accumulator === 5 | currentValue === 4
// 3 iteração: accumulator === 9 | currentValue === 6
// 4 iteração: accumulator === 15 | currentValue === 8
// 5 iteração: accumulator === 23 | currentValue === 12
// 6 iteração: accumulator === 35 | currentValue === 24
// retorna o valor do accumulator === 59

console.log(`O somatorio do array com reduce é ${sumWithReduce}.`);

// Some apenas os numeros pares do array
// const sumEvenNumbersWithReduce = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 !== 0) {
//     return accumulator + 0;
//   }
//   return accumulator + currentValue;
// }, 0);

const sumEvenNumbersWithReduce = numbers
  .filter((number) => number % 2 === 0 )
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(`O somatório dos números pares do array é ${sumEvenNumbersWithReduce}`);