// git checkout -b nome
//mkdir -p exercises/introducao-a-javascript-e-logica-de-programacao_1
//cd exercises/introducao-a-javascript-e-logica-de-programacao_1
//pwd
//git status , git commit -m ,git log , git push --

let num1 = 11;
let num2 = 20;

let adicao = num1 + num2;
let subtracao = num1 - num2;
let multiplica = num1 * num2;
let divisao = num1 / num2;
let modulo = (num1 % 2)==0;

console.log(adicao);
console.log(subtracao);
console.log(multiplica);
console.log(divisao);
console.log(modulo);

if(num1>num2){
    console.log(num1);
}else{
    console.log(num2);
}

if (num1 %2 == 0){
    console.log("esse numero e par");
}else{
 console.log("esse numero é ìmpar ");
}

let  pecaDeXadrez = "Peao" ;
pecaDeXadrez = pecaDeXadrez.toUpperCase();

switch (pecaDeXadrez) {
    case "PEAO" : 
      console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
      break;
  
    case 2 : 
      console.log("segunda feira ");
      break;
  
    case 3 : 
      console.log("terça feira ");
      break;
  
    case 4 : 
      console.log("quarta feira ");
      break;
  
    case 5 : 
      console.log("quinta feira");
      break;
  
    case 6 : 
      console.log("sexta feira ");
      break;
  
    case 7 : 
      console.log("sabado");
      break;
  
    default:
      console.log(" esse dia nao existe , tente outro :)");



}

let a = 50;
let b = 60;
let c = 70;

if (a > b & a > c){
  console.log("numero maior..:" + a);
}
else if(b>a & b>c){
  console.log("numero maior..:" + b);
}
else{
  console.log("numero maior..:" + c);
}