/*
2- Para o segundo exercício,
faça o mesmo que antes, mas que
imprima um triângulo retângulo com
5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****
*/

let num1 = 8
let linha =""
for (let index = 0 ; index < num1 ; index++) {
  linha += "*"
  console.log(linha);
}


//linha escadinha
let n = 8;
let linha1 = [];
let espacos = [];

for (let j = 0; j < n ; j++){
  espacos.push(" ")
}

for (let i = 0; i < n ; i ++){
  espacos.pop()
  linha1.push("*")
  console.log(espacos.join(""),linha1.join(""));
}




let m = 5
let asteristicos = ["*"]
let espaco = []

for(let t = 0; t < n ; t ++){
  espacos.push(" ")
}


for (let o = 0; o < m/2; o++){
  console.log(espaco.join("")+asteristicos.join(""))
  asteristicos.push("**")
  espacos.pop()
}