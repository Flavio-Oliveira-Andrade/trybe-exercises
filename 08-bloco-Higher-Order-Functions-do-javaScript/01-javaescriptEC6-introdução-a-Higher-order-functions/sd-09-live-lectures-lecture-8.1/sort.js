const characters = ["D", "C", "B", "A"];
console.log(characters);

characters.sort();
console.log(characters);


const scores = [11, 1, 10, 2, 21, 10];
console.log("Antes de ordenar:");
console.log(scores);

scores.sort((value1, value2) => {
  // Se o value1 é maior que o value2, retorne um número positivo qualquer
  // Se o value2 é maior que o value1, retorne um número negativo qualquer
  // Se o value1 for igual ao value2, retorne 0
  return value1 - value2;
});

// Também da pra fazer assim :)
// scores.sort((value1, value2) => value1 - value2);

console.log("Depois de ordenar:")
console.log(scores); 
