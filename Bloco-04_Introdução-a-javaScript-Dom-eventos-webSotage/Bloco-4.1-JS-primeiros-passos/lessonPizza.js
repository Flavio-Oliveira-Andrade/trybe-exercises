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
pizzas.push('pizza6');
pizzas.unshift('pizza01'); // .unshift
pizzas.unshift('pizza00'); // colo um item no inicio da array
pizzas.pop(); // remove ultimo item da lista 
pizzas.shift() // remove primeiro item  da lista 

//console.log(pizzas) 
//console.log(pizzas.length)
//console.log(pizzas[0])


for (let index = 0 ; index < pizzas.length ; index+=1){
    console.log(pizzas[index]);
}

//imprimir posição no array
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro



//console.log(indexOfTask);  procura um indice no array



// switch case 


