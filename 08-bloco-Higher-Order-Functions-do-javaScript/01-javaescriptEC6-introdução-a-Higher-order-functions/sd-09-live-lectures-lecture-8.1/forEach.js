const numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let index = 0; index < numbers.length; index += 1) {
//   const element = numbers[index];
//   console.log(element);
// }

// arrow function
numbers.forEach((value) => {
  console.log(value);
});

// funcao tradicional
numbers.forEach(function(value) {
  console.log(value);
});

// funcao passada como parametro
numbers.forEach(forEachFunction);
function forEachFunction(value) {
  console.log(value);
}

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

users.forEach((value) => {
  console.log(`${value.firstName} sabe dirigir? ${value.isDriver}`);
});