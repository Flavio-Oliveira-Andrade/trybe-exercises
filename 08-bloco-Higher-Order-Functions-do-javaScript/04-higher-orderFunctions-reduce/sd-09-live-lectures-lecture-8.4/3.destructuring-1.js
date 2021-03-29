const assert = require('assert');

const singer = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
}

const { name: singerName, birthplace, city, albuns } = singer;

console.log(singerName);

const [ first, second, ...otherAlbums ] = albuns;

console.log(first, second);
console.log(otherAlbums);


// TESTES
const expectedValue = 'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 albuns.'
const actualValue = `O cantor ${singerName} nasceu no ${birthplace} e mora em ${city}. Ele possui ${albuns.length} albuns.`;

assert.strictEqual(expectedValue, actualValue);