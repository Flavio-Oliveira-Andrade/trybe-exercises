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

// 1. Encontre todas as cidades da região Nordeste
console.log("As cidades que ficam na região nordeste são:");
const citiesFromNortheast = cities.filter((city) => {
  return city.region === 'NE';
});
console.table(citiesFromNortheast);

// 2. Encontre todas as cidade do estado de Tocantins
console.log("As cidades do estado de Tocantins são:");

// const tocantinsCities = cities.filter((city) => {
//   return city.state === 'TO';
// });

const tocantinsCities = cities.filter((city) => city.state === 'TO');

console.table(tocantinsCities);

// 3. Encontre todas as cidades que comece com a letra B
console.log("As cidades que começam com a letra B são:");
const citiesThatStartsWithB = cities.filter((city) => {
  return city.name.startsWith('B');
});
console.table(citiesThatStartsWithB);
