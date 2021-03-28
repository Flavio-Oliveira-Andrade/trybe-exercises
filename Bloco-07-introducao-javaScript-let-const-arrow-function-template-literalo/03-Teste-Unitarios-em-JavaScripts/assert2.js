const assert = require('assert');

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [1, 2, 3, 4, 5, 6]; // error pois existe mais numero list2

// assert.deepStrictEqual(list1, list2, 'error, list1 e list2 nao sao extremamente igual');

const person1 = {name: 'jhon', age: 21 };
const person2 = {name: 'jhon', age: 21 };
const person3 = {name: 'jhon', age: 22 };// nao são iguais, pois age esta number 22, diferente do outro objeto


assert.deepStrictEqual(person1, person2, '1 e 2 nao sao iguais');
assert.deepStrictEqual(person1, person3, '1 e 3 nao sao iguais');
