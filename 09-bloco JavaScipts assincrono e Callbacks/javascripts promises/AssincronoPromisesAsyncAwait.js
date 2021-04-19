//javascript Assincrono , Promises, Async Await, feth()

// const resultadoFinal = (resultado) => {
//   console.log(resultado);

// }

// const funcSoma = (num1, num2) =>{
// let soma = num1 + num2;
// resultadoFinal(soma)
// }
// funcSoma(10, 8)

const resultadoFinal = (resultado) => {
  console.log(resultado);

}

const funcSoma = (num1, num2, callback) =>{
let soma = num1 + num2;
callback(soma)
}
funcSoma(10, 8, resultadoFinal)

