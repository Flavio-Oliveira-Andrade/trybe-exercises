const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const firstUserThatDontDrive = users.find((value) => {
  return value.isDriver === false;
});

// Também da pra fazer assim :)
// const firstUserThatDontDrive = users.find((value) => value.isDriver === false);

console.log(firstUserThatDontDrive.firstName);