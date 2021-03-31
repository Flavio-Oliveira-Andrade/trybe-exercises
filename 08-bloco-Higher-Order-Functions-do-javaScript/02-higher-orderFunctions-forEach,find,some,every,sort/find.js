const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const user = users.find((value) => {   // precisa declara uma variavel para guarda a sua regra de negocio
 return value.isDriver === false
});
console.log(user);

const dirigir = users.find((value) => {
return value.isDriver === true;
})
console.log(dirigir);