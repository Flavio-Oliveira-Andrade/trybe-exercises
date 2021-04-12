let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
 const caut = array.reduce((acumulador, valorCorrente) => {
   return acumulador + valorCorrente
 }, 0);
 console.log(caut)


let array2 = ['a' ,'long', 'time', 'ago',  'in', 'a',  'galaxy', 'far', 'far', 'away'];
let frase = array2.reduce((scc,  curr) => {
  return `${scc} ${curr}`;
})
console.log(frase);