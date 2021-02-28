/*
Bora fixar o conteúdo de hoje?!
Preparamos estes exercícios para você fixar seus conhecimentos em sobre Lógica de Programação e Algoritmos . Eles já contam com feedback na hora e são rapidinhos! Vamos lá?
Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede!
Recomendamos que você utilize o debugger durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger , acesse nosso conteúdo sobre isso.
1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
*****
*/
// exercio do quadrado
let numero = 5;
let linha = [];

for (let i = 0; i < numero; i++){
  linha.push('*');

}

for (let j = 0 ;  j <  numero ; j++){

  console.log(linha.join(''));

}

let num = 5;
let str = "*";

for (let j = 0 ; j < num ; j++){
  console.log(str);
}










/*
3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
4- Depois, faça uma pirâmide com n asteriscos de base:
Copiar
n = 5

  *
 ***
*****

*/