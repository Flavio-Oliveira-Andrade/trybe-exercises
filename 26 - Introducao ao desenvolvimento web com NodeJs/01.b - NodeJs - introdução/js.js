const chai = require('chai');
const { expect } = chai

somarNumeros((a, b)=> a + b )

describe('Soma', () => {
  it ('Soma dois numeros - 2 3', (done) => {
    const resultado =somarNumeros(2,3);
    expect(resultado).be.equal(5);
    done()
  })

})


