const enviarEmail = (pessoas) => {
  const parte1 = `${pessoas.aprovadas}: parabéns ${ pessoaAprovada.name}`;
  const mensagem = `${parte1} sua nota foi ${pessoaAprovada.nota}`;
  console.log(mensagem);
}

const pessoasFiltradas = listaPessoa.filter((pessoas) => pessoas.nota >= 100);
console.log(pessoasFiltradas);

pessoasFiltradas.forEach((pessoa) => enviarEmail(pessoa));

// filter recebe 3 parametros  filter(velue, index, array)

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]