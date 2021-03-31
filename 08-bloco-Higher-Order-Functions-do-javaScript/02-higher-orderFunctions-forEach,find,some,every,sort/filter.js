const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavel" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" },
  { state: "TO", name: "Três Pedras" , region: "N" },
  { state: "MG", name: "Betim" , region: "SE" }
];

// encontre todas as cidades da regiao nordeste
const res = cities.filter((city) => {
  return city.region === 'NE'  // retorno todos o mesmo filtro em um novo array
})
console.log(res)
console.log('estado de tocantins');
// encontre todos os estado de tocantins
const resTocantins = cities.filter((city) => {
  return city.state === 'TO';
})
console.table(resTocantins);
//encontre todas as cidades que comece com a letra B
const resLetraB = cities.filter((city) => {
  return city.name.startsWith('B'); // confere se a string começa com B   (endsWith)
})
console.log(resLetraB)