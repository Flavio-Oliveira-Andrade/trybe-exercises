//media dos  indeces do array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let posical = numbers.length
//console.log(posical);
console.log("________________________________________");
console.log("________Média dos total Indeces_________");
let tota = 0;
for (i=0 ;i < numbers.length;i++){
  tota += numbers[i]
  //console.log(tota);


}
console.log(`Valor total.. ${tota}`);
console.log(`Valor da Media é.. ${tota/posical}`);


// caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";