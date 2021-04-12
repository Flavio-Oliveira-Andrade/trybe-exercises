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

const ne = cities.filter((city) => {
  return city.region === "NE"    //return novo array , cria um novo array com as regras de negocio
})
console.log(ne);

const fi = cities.find((city) => {
  return city.region === "NE"
})
console.log(fi);  // traz o primeiro objeto com a regra de negocio

console.log('_____cidades que comece com a letra B_____')
const b = cities.filter((city) =>{
  return city.name.startsWith('B');
})
console.log(b);
//#100DaysOfCode
//https://www.freecodecamp.org/
//hosting