const pessoa ={
  nome: 'igor'
}

const sobreNome = {
  sobreNome: 'silava'
}

const clonePessoa = Object.assign({},pessoa, sobreNome);
clonePessoa.nome = 'francisco';
console.log(clonePessoa);
console.log(pessoa);


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);