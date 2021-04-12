// const assert = require('assert');  //sintaxe para chamar metodo de assert -teste unitarios no javaScripts

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
// assert.strictEqual(50, 70); // AssertionError: 50 == 70

const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

// assert.strictEqual()   // extremamente igual    ===

// assert.deepStrictEqual() Se dois objetos, ou seus objetos filhos,
//não forem iguais (tanto em valor quanto em tipo), um erro é lançado e o programa é encerrado
//O método assert.deepStrictEqual () testa se dois objetos e seus objetos filhos são iguais, usando o operador ===.

// assert.notStrictEqual()  // nao pode ser igual false ===
// assert.ok()
// assert.fail()
// assert.equal() igual , mesmo que seja uma sem coparaçãode tipos  ex  5 + '5' == 5
// assertnotEqual()  diferente false  , mesmo que seja uma sem coparaçãode tipos  ex  5 + '5' != 5

// var assert = require('assert');
var x = { a : { n: 0 } };
var z = { a : { n: 0 } };
assert.deepStrictEqual(x, z, "My message goes here");
