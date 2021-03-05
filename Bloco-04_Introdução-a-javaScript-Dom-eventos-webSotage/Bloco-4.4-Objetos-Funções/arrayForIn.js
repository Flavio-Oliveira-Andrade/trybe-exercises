let cars = ['saab','volvo', 'bmw'];
  for(let car in cars){
    console.log("propriedade "+ car);
    console.log("value " + cars[car])
    console.log('na posição '+ car + ' temos ' + cars[car]);

  }

  let = num1 = numeroJogados();
  function numeroJogados(){
    return Math.ceil(Math.random()*60)
  }
  console.log("gera um numero aleatorio.. " +num1);

  function joga6(){
    let number =[]
    for(let index = 0; index < 6 ; index+=1){
    number.push(numeroJogados());
    }
    return number;
  }
  console.log(joga6(60));