const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sentence = epic.reduce((previousValue, currentValue) => {
  return `${previousValue} ${currentValue}`;
}, 'Frase:');

console.log(sentence);