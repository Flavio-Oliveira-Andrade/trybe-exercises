let info = {
  personagem: "Margarida",
  origem: "Pato Dnald",
  nota: "Namorada do personagem principal nos quadrinhos do pato donald",

};

console.log("wellcomme  " + info.personagem)
info.recorrente = "sim";

console.log(info)

console.log("imprima todos os keys do objeto")
console.log("-----------------------------")
for (let key in info) {
  console.log(info[key] );
    }

console.log("as chaves do objeto")
console.log("-----------------------------")
console.table(info );
console.log(info.key );