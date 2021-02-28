//imprima o array
// imprima array um abaixo do outro

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

for(inder = 0;inder < numbers.length;inder++){
  console.log(numbers[inder])
}

//somar os indeces do array
console.log("______________________________");
console.log("________Somar Indeces_________");
let tota = 0;
for (i=0 ;i < numbers.length;i++){
  tota += numbers[i]
  console.log(tota);


}
console.log(`Valor total.. ${tota}`);