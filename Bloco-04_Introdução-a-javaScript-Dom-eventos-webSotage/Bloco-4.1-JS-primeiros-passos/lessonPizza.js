/*
Primitives
Number, boolean, string, undefined and null are primitives.

Há funções para converter strings para números: Number.parseInt(), Number.parseFloat()e Number():

Number.parseInt("1")       //1
Number.parseInt("text")    //NaN
Number.parseFloat("1.234") //1.234
Number("1")                //1
Number("1.234")            //1.234

let text = '';
if(text) {
  console.log("This is true");
} else {
  console.log("This is false");
}



*/

let pizzas = ['pizza1' , 'pizza2' , 'pizza3'] ;
pizzas.push('pizza4');
pizzas.push('pizza5');

console.log(pizzas)
console.log(pizzas.length)
console.log(pizzas[0])

for (let index = 0 ; index < pizzas.length ; index+=1){
    console.log(pizzas[index]);
}