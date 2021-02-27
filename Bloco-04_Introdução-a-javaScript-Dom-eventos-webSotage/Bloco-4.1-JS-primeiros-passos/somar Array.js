let soma = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (var i = 0; i < numbers.length; i++){

        soma += numbers[i];


    }
    console.log(soma);




    //Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    //A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
    let somaArray = 0;
    let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let quantidade = numberss.length;

    for (let contador = 0; contador < numberss.length; contador++){

      numberss[contador]
      somaArray += numberss[contador];

    }
    console.log(somaArray);
    console.log(somaArray/quantidade);