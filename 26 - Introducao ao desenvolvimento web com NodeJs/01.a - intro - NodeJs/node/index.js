const readLine = require("readline-sync")

function calculaBhasKara(){
  console.log('fazendo calculo de bhaskara\n');
  const a = readLine.questionInt("Digite o Valor de a ")
  const b = readLine.questionInt("Digite o Valor de b ")
  const c = readLine.questionInt("Digite o Valor de c ")

  //console.log('Coeficiente: A:' + a + ' B:' + b + ' C:' + c);
  console.log(`Coeficiente A:${a}B:${b}C:${c}`);
  //console.log('Coeficiente a:%s b%s c%s', a,b,c)

  const delta = calculaDelta(a,b,c)

  if(delta < 0 ){
    console.log('Valor de delta menor que  Zero');
    return;
  }
  console.log('O valor de delta é '+ delta);

  const resultado = calculaX(a,b,delta);
  //console.log(resultado[0], resultado[2]);
  console.log(resultado.x1, resultado.x2);

}

function calculaDelta(a,b,c){
  //return (b*B) - (4*a*c);
  return Math.pow(b, 2) - (4*a*c);
}

function calculaX(a,b,delta){
  const x1 = ((-b + Math.sqrt(delta)) / ( 2 * a )).toFixed(2);
  const x2 = (-b - Math.sqrt(delta)) / ( 2 * a );
  //return [ x1, x2 ]
  return { x1, x2 }
}

calculaBhasKara()


