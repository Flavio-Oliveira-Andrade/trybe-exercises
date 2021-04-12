const assert = require('assert');

// PROBLEMA: JUNTE ESSES 2 ARRAYS EM APENAS 1
const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// UTILIZANDO FOR
let awesomeBooks = [];

for (let i = 0; i < horrorBooks.length; i++) {
  awesomeBooks.push(horrorBooks[i]);
}

for (let i = 0; i < scifiBooks.length; i++) {
  awesomeBooks.push(scifiBooks[i]);
}

// UTILIZANDO SPREAD OPERATOR
const books = [...horrorBooks, ...scifiBooks];

console.log(books);

// TESTES
const expectedValue = ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity'];
assert.deepStrictEqual(books, expectedValue);
