const os = require('os');
console.clear()

setInterval(() => {

const { freemem, totalmem } = os

const total = parseInt(totalmem()/1024 /1024);
const men = parseInt(freemem()/1024 /1024);
const porcents = parseInt((men / total)*100)

const loge = {
  free: `${men} MB`,
  total: `${total} MB`,
  usage: `${porcents} % `,
}
console.clear()
console.clear()
console.log(" ===== PC Status =====");
console.table(loge);
}, 2000);

//transfoma 1 letra maiscula
var teste = "this IS just A tExT";
teste = teste.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
  return a.toUpperCase();
});

console.log(teste);

function titleize(string, separator = ' ') {
  return string
    .split(separator)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

console.log(titleize('OLÁ como vAI esse dia nunca chega?'));
console.log(titleize('hELLO wORLD e mais linda da cidade!'));

// ******************

function titleize(string, separator = ' ') {
  if (string === string.toUpperCase()){
    return string
    .split(separator)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  }else{
    return string.split(separator).join('');
  }
}


console.log(titleize('OLÁ como vAI esse dia nunca chega?'));
console.log(titleize('hELLO wORLD e mais linda da cidade!'));
console.log(titleize('minha casa '));

let letra = "a"
undefined
letra.toUpperCase();
"A"
letra.toUpperCase()
"A"
letra === letra.toUpperCase()
false
let letra = "A"
undefined
letra
"A"
letra === letra.toUpperCase()
true