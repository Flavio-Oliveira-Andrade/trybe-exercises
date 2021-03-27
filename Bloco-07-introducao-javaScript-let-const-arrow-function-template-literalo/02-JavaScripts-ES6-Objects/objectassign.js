// obeject assign
//a função é receber um numero qualquer de parametros ,e todos sao agregados para um nova copia
// Object.assign (destino objeto1 .. .. ..) podendo havermais de um desdino

const pessoa = {
  nome: 'carlos',
  idade:  20,
  cidade: 'rio'
}

const infor = {
  form: 'engenheiro',
  idade: 23
}

const familia = {
  filhos: ['maria', 'joao'],
  esposa: 'ana',
}
Object.assign(pessoa, infor, familia)
console.log(pessoa);

const clone = Object.assign(pessoa, infor, familia )
console.log(clone)

// como voce pode verificar o clone é exatamento iguaçl ao objeto .
// qualquer mudança no objeto resulta no principal
clone.nome = 'maria'

console.log(clone);
console.log(pessoa);

