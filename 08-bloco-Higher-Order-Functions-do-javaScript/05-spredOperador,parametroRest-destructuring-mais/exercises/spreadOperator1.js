const names = ['carro', 'bike', 'terra', 'globo']
const nomes2 = ['casa', 'apartamento', 'sobrado']

function sam () {
  return [...names, ...nomes2]
  .sort()
}
console.log(sam())

