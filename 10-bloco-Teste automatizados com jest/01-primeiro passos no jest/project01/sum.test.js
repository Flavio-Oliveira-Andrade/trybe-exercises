// sum.test.js
const sum = requi('./sum') // imprtando minha função

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});


// A linha module.exports = sum exporta
// a função sum no primeiro arquivo para que possa ser utilizada em outros módulos.
// No segundo arquivo, utilizamos require('./sum')
// para importar a função sum .