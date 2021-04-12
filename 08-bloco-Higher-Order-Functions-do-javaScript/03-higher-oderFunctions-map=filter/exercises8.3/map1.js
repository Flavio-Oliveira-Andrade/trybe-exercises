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

let array = []
cities.forEach((city) => {
  array.push(`${city.name} - ${city.state}`);

})
console.log(array);

console.log("map()ele retorna um item trasformado")

const citieInitials = cities.map((city) => {
  return `${city.name} - ${city.state}`
})
console.log(citieInitials);

console.log('trasfome um array em cidade e seu estado usando duas function')

const estado = cities.map((city) => {
  const uf = states.find((r) =>{
    return r.short === city.state;
  })
  return `A cidade de ${city.name} fica no estado de ${uf.name}`
})
console.log(estado)

const arrayCities = cities.map((city)=>{
  const uf = states.find((r) =>{
    return r.short === city.state;
  })
  const regi = regions.find((re) =>{
    return re.short === city.region;
  })

  return {
    state: uf.name,
    city: city.name,
    region: regi.name
  }
});
console.table(arrayCities)