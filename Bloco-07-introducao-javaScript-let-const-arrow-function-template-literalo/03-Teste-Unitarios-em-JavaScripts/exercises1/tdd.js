// TDD:  desenvolvimento orientado a testes,
const assert = require('assert');

const myFunction = (num1, num2) => {
  if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
    throw new Error('Valores devem ser numeros')
  }
  return num1 / num2
}
assert.strictEqual(typeof myFunction, 'function');
assert.deepStrictEqual(myFunction(6, 2), 3, 'e maio que ');

console.log(myFunction(6, '2'));