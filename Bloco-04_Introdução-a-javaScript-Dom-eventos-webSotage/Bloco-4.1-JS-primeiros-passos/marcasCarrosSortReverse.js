let carros = ['fiesta' , 'saab' , 'volvo' , 'bmw' ];
for ( var i = 0; i < carros.length; i+=1){
    console.log(carros[i]);
}

let number =  [5, 9, 3, 19, 70, 8, 100, 2, 35, 27 , 1];

// função para ordena numeros do array nao muito grandes.

function ordenaNumeros(a, b){
    return a-b
}
number.sort(ordenaNumeros);
for (let i = 0 ; i < number.length; i +=1){
    console.log(number[i]);
    //console.log("");
}

function ordenaNumeros(a, b){
    return a-b
}
number.sort(ordenaNumeros);
number.reverse(); // metodo para reverta a ordem da lista
for (let i = 0 ; i < number.length; i +=1){
    console.log(number[i]);
    //console.log("");
}
