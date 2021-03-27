const pessoa = {
  nome: 'Carlos',
  idade: 34,
  trabalho: 'Professor'
}
console.table(pessoa);

pessoa.cidade = 'Niteroi';
console.log(pessoa);

//object.keys() = é utilizado para trazer as chaves de um object num array.
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));