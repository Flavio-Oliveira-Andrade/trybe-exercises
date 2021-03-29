const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// Faça um algoritmo que verifica se existe alguma pessoa que não dirija

// retorna true ou false, caso o predicato seja verdadeiro em ALGUM item
const isThereAnyoneThatDontDrive = users.some((value) => {
  return value.isDriver === false;
});

// Também da pra fazer assim :)
// users.some((value) => value.isDriver === false );

console.log(isThereAnyoneThatDontDrive);