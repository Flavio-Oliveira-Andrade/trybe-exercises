const assert = require('assert')

const myremove = (arr, item) => {
  let newArray = [];
  for(let index = 0; index < Array.length; index += 1) {
    if (item !== arr[index]){
      newArray.push(arr[index]);
    }
  }
  return newArray;
}

assert.strictEqual(typeof myremove, 'function');
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
