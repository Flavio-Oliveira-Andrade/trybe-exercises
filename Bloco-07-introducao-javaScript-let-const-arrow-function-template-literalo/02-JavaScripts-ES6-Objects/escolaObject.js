const escola = {
  name:'tata',
  cidade: 'iguaba'
}
console.log(`sua escola:${escola.name}, na cidade de ${escola.cidade}`)
escola.serie = '4 serie'
escola['professora'] = 'marcia'

console.log(escola)
console.log(typeof(escola));

console.log(`existe professora? ${Object.keys(escola).includes('professora')} `);

