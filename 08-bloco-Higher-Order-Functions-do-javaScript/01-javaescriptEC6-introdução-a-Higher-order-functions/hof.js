const person = {
  name: 'John',
  lastName: 'silva'
};

const greeting = (person) => {
  console.log (`ola ${person.name} ${person.lastName}, como vai voce`);
};

greeting(person);