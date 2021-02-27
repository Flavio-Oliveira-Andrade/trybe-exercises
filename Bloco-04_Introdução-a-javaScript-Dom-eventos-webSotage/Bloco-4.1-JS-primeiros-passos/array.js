
let menu = ['Home', 'Serviços' , 'portifolio' , 'Links']
let menuServiços = menu;

console.log('quantidade de serviços..: ' + menuServiços.length)
console.log(menuServiços[1]);
console.log(menu.sort()); // sort coloca em ordem alfabetica o meu array

for (cont=0 ;cont < menu.length ;cont++){
    console.log('serviços: ' + menu[cont]);
}
let posicao = menu.indexOf('serviços')
console.log('posicao: ' + posicao) //index.Of usado para procurar posição no array.prototype.flat