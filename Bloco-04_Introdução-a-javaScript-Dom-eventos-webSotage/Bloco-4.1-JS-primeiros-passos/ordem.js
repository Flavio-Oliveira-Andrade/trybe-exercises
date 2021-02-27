let number =  [3, 5, 9, 19, 70, 8, 100, 2, 35, 27 , 1];
let numeroMenor = 0;
let ordenado = [];

for(let index = 1; index <  number.length ; index++) {
  for(let index2 = 0 ; index2 <number.length ; index2++){
    if(number[index] < number[index2]){
      let posicao = number[index]
      number[index] = number[index2]
      number[index2] = posicao;
    }
  }
}
console.log(number);