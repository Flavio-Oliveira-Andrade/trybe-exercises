function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope2 = (escopo) => {
  if (escopo === true) {
   let ifScope2 = 'não devo ser utilizado fora do meu escopo (if) ';
    ifScope2 = `${ifScope2}ótimo , fui utilizado no escopo !`
    console.log(ifScope2);
  } else {
    let elseScope2 = 'Nao devo ser utilizado fora do meu escopo (eslse)';
    console.log(elseScope2);
  }
  // console.log(`${elseScope}o que estou fazendo aqui ? :o`);
};
testingScope2(true);


