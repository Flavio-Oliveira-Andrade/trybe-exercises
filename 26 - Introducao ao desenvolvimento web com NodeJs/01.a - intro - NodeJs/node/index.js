const readLine = require("readline-sync")

function calculaBhasKara(){
  console.log('fazendo calculo de bhaskara\n');
  const a = readLine.questionInt("Digite o Valor de a \n")
  const b = readLine.questionInt("Digite o Valor de b \n")
  const c = readLine.questionInt("Digite o Valor de c\n ")

  //console.log('Coeficiente: A:' + a + ' B:' + b + ' C:' + c);
  console.log(`Coeficiente\n A: ${a}\n B: ${b}\n C: ${c}`);
  //console.log('Coeficiente a:%s b%s c%s', a,b,c)

  const delta = calculaDelta(a,b,c)

  if(delta < 0 ){
    return console.log(
      'Valor de delta menor que  Zero ' + delta );
  }

  console.log('O valor de delta é '+ delta);

  const resultado = calculaX(a,b,delta);
  //console.log(resultado[0], resultado[2]);
  console.log(`Resultado: X1 = ${resultado.x1}; X2 = ${resultado.x2}`);

}

function calculaDelta(a,b,c){
  //return (b*B) - (4*a*c);
  return Math.pow(b, 2) - (4*a*c);
}

function calculaX(a, b, delta){
  const x1 = ((-b + Math.sqrt(delta)) / ( 2 * a )).toFixed(2);
  const x2 = (-b - Math.sqrt(delta)) / ( 2 * a );
  //return [ x1, x2 ]
  return { x1, x2 }
}

calculaBhasKara()



// const readLine = require("readline-sync")


// function executaCalculo() {
//     const a = readLine.questionInt("Digite o valor de a: ");
//     const b = readLine.questionInt("Digite o valor de b: ");
//     const c = readLine.questionInt("Digite o valor de c: ");

//     const delta = calculaDelta(a, b, c);

//     if (delta < 0) {
//         console.log("Impossivel fazer calculo de delta negativo");
//         return;
//     }

//     const result = calculaX(a, b, delta);

//     console.log(`Resultado: X1 = ${result.x1}; X2 = ${result.x2}`);

// }

// function calculaDelta(a, b, c) {
//     return Math.pow(b, 2) - 4 * a * c;
// }

// function calculaX(a, b, delta) {
//     const x1 = ((-b + Math.sqrt(delta)) / (2 * a))
//     const x2 = ((-b - Math.sqrt(delta)) / (2 * a))

//     return { x1, x2 }
// }

// exemplo de chamada 1, 5, 2


// executaCalculo();



