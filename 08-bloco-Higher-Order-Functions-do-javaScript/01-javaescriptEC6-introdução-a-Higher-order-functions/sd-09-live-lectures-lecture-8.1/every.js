const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// Todo mundo desse array sabe dirigir?
const isEveryoneADriver = users.every((user) => user.isDriver === true);

// Também da pra fazer assim :)
// users.every((user) => {
//   return user.isDriver;
// });

console.log(isEveryoneADriver);
