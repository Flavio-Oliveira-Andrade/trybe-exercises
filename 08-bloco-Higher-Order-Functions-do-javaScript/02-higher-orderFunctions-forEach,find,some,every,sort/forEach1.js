const numbers = [1, 2, 3 , 4, 5, 6, 7, ]

numbers.forEach(value = (value,index) => {
  if (value === 5 ? console.log(value)  : console.log('index ' +index));
})


const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

users.forEach((value) => {
console.log(`o ${value.firstName}, Sabe dirigir? .. ${value.isDriver}`)
})