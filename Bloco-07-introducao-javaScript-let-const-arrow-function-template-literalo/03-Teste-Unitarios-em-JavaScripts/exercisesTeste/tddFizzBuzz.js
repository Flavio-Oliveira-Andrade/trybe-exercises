const assert = require('assert')

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num %3 === 0 && num %5 === 0 ) return "fizzBuzz";
  if (num %3 === 0) return 'fizz';
  if (num %5 === 0) return 'buzz';
  return num;
}
// console.log(myFizzBuzz(11));

assert.strictEqual(myFizzBuzz(15), 'fizzBuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(25), 'buzz');
assert.strictEqual(myFizzBuzz(17), 17);
assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);