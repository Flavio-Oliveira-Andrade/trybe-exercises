const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

const myName2 = 'Isabela'
console.log(`Welcome ${myName2}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')
console.log('Primeira linha;' + 'Segunda linha;' + 'Terceira linha;')

const printName = function(){
  const name = "Flavio"
  return name;
}
console.log(printName());

function contarPalavras(frase){
  return frase.trim(' ').split(' ').length
}
console.log(contarPalavras( ' meu amigo de longas dantas trabalhos e diversoes  '))

const PrintName = () => {
  const name = 'Flavio Foa'
  return name
}
console.log(PrintName());

const printName2 = () => 'Flavio oliveira'
console.log(printName2());

const multiplay = namber => namber * 2;
console.log(multiplay(10));

const multiplay2 = (namber, multiplicador) =>  namber * multiplicador ;
console.log(multiplay2(10, 100));

// expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;
const trueExpression = (1 + 1 === 2 ) ? 'true' : 'false';
console.log(trueExpression);

const trueExpression2 = (1 + 1 === 3 ) ? 'true' : 'false';
console.log(trueExpression2);

