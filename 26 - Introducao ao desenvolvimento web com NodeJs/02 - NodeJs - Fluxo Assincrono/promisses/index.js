console.log("Testando aplicação")

const fs = require('fs');
const { readFile } = fs

readFile('./arquivo.txt', (err, content) => {
  if(err){
    console.log("Error ao ler o arquivo: " + err.message);
    return;
  }else{
    console.log("Arquivo lido com sucesso, Conteudo \n" + content.toString('utf-8'));
  }
})

const promises = ( resolve, reject  ) => {
  try{
    console.log("Promises: " + resolve.JSON.stringify())
  }
  catch(err) {
    console.log(reject.message)
  }

}

function calculaDivisao(a, b) {
  if(b == 0 ) throw new Error("Nao pode ser  feita divisao por zero");
  const resultado  = a / b;
  return resultado;
}

try {
  const resultado = calculaDivisao(10, 0)
  console.log("Resultado: %s", resultado);
} catch (error) {
  console.log("erro: %s", error.message)
}

function calculaDivisao2(num1, num2){
  const promise = new Promise((resolve, reject) => {
    if(num2 == 0 ) reject(new Error("Operação nao realizada, nao pode dividir um numero por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  })
  return promise;
}

calculaDivisao2(10,10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))



// calculaDivisao2(10, 10)
//   .then((result) => console.log("Resultado: %s", result))
//   .catch((error) => console.log("erro: %s", error.message))

// sintaxe de promise

const p = new Promise((resolve, reject) => {
  // Aqui é onde vamos realizar a lógica que precisamos
  // para "tentar cumprir" a promessa
});

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}