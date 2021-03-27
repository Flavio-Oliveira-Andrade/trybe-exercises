const person = {
  name: 'John',
  lastName: 'John Smith',
  age: 34,
  elegant: true,
    adress:{
      City: 'niteroi',
      uf: 'RJ',
      namber: 1408
    }
}
console.log(person);
console.table(person);
console.table(Object.keys(person));
console.table(Object.values(person));
// voce pode adicionar mais propiedades no object Exemplo

person.adress.pais = 'Brasil';
console.log(person);    // perceba que o pais foi acrescentado. atraves de doteNotechan ' .'
console.log(`existe essa propiedade ? ${Object.keys(person.adress).includes('pais')}`)
//devemos notar que dentro de persona exixte outro object 'adress' se nao for colocado return sera false

console.log(Object.values(person));
console.log(Object.entries(person));  // ira trazer todas as chaves e valores; separdo por virgulas


const carro = {
  Modelo: 'granSiena',
  marca: 'Fiat',
  ano: 2021
}

const pessoa = {
  nome: 'Renata',
  cidade: 'Niteroi',

}
console.log(carro);
Object.assign(carro, {compradora:pessoa.nome} );  // desta maneira é possivel enviar uma propiedade
console.log(carro);                               //unica , direto por aqui . => person.adress.pais = 'Brasil';
//                                                desta maneira se torna muito mais facil
