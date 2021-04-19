const imprimir = (print) => {
  console.log(print)
};

const matematica = (num1, num2, callback) => {
let result = num1 * num2
callback(result)

}

matematica(7, 2, imprimir);