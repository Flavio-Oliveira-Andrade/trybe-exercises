chekIfElse = (idade) => {
  if (idade < 18){
    return `você nâo tem idade de dirigir `;
  }else {
    return `você tem idade par dirigir`;
  }
};
console.log(chekIfElse(25));

const operadorTernario = (condition ) => (
  condition > 18 ? `voce tem idade` : `voce nao tem idade`);
  console.log(operadorTernario(10));

