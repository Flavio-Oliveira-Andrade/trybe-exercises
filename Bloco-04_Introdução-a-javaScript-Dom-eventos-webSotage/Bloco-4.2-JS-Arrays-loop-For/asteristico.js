let n = 20;
if (n%2 == 1){
  n +=1
}
let meio = n/2;
console.log(meio);
let esquerda = meio;
let direito = meio;
console.log("arvore completa com dois lados ");
for (let index = 0; index <=meio ; index++){
  let linha = ""
  for (let index2 = 1; index2 <= n; index2++){
    if ((index2 == (esquerda)) || (index2 == (direito)) || (index == meio)){
      linha = linha + "*"
    }
    else
    linha = linha +" "
  }
console.log(linha)
esquerda = esquerda -1
direito = direito +1;
}



