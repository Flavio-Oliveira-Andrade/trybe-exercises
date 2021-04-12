// git branch
// git checkout -b  new-exercises
// git add .
// git commit -m ''
// git push -u origin new-exercises
// git push

const assert = require('assert');

const sum = (a, b) => {
  if (typeof(a) !== 'number' || typeof(b) !== 'number'){
    throw new Error ('parameter must be number');
  }
  return a + b
}
assert.deepStrictEqual(typeof sum,'function');
assert.deepStrictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
  sum(4, '5');
});

assert.throws(() => {   // nesta paste serve para verificar se a msg da função retorna igualzinha
  sum(4, '5');
}, /^Error: parameter must be number$/); // expressao regular



