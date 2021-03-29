const states = [
  { short: "AM", name: "Amazonas" },
  { short: "PA", name: "Pará" },
  { short: "TO", name: "Tocantins" },
  { short: "MG", name: "Minas Gerais" },
  { short: "BA", name: "Bahia" },
  { short: "PR", name: "Paraná" },
  { short: "SP", name: "São Paulo" },
  { short: "RN", name: "Rio Grande do Norte" },
  { short: "CE", name: "Ceará" }
];

const regions = [
  { short: "N", name: "Norte" },
  { short: "NE", name: "Nordeste" },
  { short: "CW", name: "Centroeste" },
  { short: "SE", name: "Sudeste" },
  { short: "S", name: "Sul" },
];

const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavél" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// 1. Transforme o array de objetos cities em um array de strings com o seguinte formato:
// a.1) Usando forEach: "${nomeDaCidade} - ${siglaDoEstado}"
console.log("Formato Usando forEach: ${nomeDaCidade} - ${siglaDoEstado}");
let array = [];
cities.forEach((city) => {
  array.push(`${city.name} - ${city.state}`);
});
console.log(array);

// a.2) "${nomeDaCidade} - ${siglaDoEstado}"
console.log("Formato Usando map: ${nomeDaCidade} - ${siglaDoEstado}");
// const citiesAndStateInitials = cities.map((city) => {
//   return `${city.name} - ${city.state}`;
// });

const citiesAndStateInitials = cities.map((city) => `${city.name} - ${city.state}` );

console.log(citiesAndStateInitials);

// b) "A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}"
const citiesAndStateNames = cities.map((city) => {
  const stateInfo = states.find((state) => state.short === city.state );
  return `A cidade de ${city.name} fica no estado de ${stateInfo.name}`;
});

console.table(citiesAndStateNames);


// 2. Transforme o array de objeto cities em um array de objetos do seguinte formado:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }
console.log(`Formato:
{
  state: "Amazonas",
  city: "Manaus",
  region: "Norte"
}`);