const paises = {
  frança: 'paris',
  brasil: 'brasilia',
  espanha: 'madri',
  portugal: 'lisboa'
}

const lista = (pais) => Object.entries(pais);
console.log(lista(paises));

const paises1 = {
  frança: 'paris',
  brasil: 'brasilia',
  espanha: 'madri',
  portugal: 'lisboa'
}
const pais = Object.entries(paises1) // essa const recebe o objeto por completo, sem ele  so vai sair a primeira letra do pais ou capital

for( index in pais){
  console.log('_____________-__________');
  console.log('pais: ', pais[index][1]);
  console.log('capital: ', pais[index][0]);
}

