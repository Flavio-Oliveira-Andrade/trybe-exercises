const assert = require('assert');

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

const objectPlayer = players.reduce((previousValue, currentValue) => {
  previousValue[currentValue.fullName] = currentValue.email;
  return previousValue;
}, { });

// 1 iteracao: previousValue === { }
// currentValue === { fullName: 'Adriano Imperador', email: 'didico@futebol.br' }

// 2 iteracao: previousValue === {
// 'Adriano Imperador': 'didico@futebol.br'
// }
// currentValue === { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' }

// 3 iteracao
// previousValue === {
//  'Adriano Imperador': 'didico@futebol.br',
//  'Ronaldinho Gaúcho': 'bruxo@futebol.br'
// }
// currentValue === { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' }

// 4 iteracao
// previousValue === {
//  'Adriano Imperador': 'didico@futebol.br',
//  'Ronaldinho Gaúcho': 'bruxo@futebol.br'
//  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// }
// currentValue === { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' }

// retorna o acumulador
// {
//   'Adriano Imperador': 'didico@futebol.br',
//   'Ronaldinho Gaúcho': 'bruxo@futebol.br',
//   'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
//   'Túlio Maravilha': 'deputado@futebol.br'
// }


const expectedValue = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinho Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Túlio Maravilha': 'deputado@futebol.br'
};

assert.deepStrictEqual(objectPlayer, expectedValue);