const carro ={
  marca: 'fiat',
  modelo: 'uno',
  ano: 2020
}

const carro1 = {
  marca: 'ford',
  modelo: 'fiesta',
  ano: 2006
}

const moto = {
  marca: 'yamaha',
  modelo: 'fazer',
  ano: 2018
}

const listar = (veiculo) => {
  const arrayVeiculo = Object.keys(veiculo);
    for(index in arrayVeiculo) {
      console.log(`${arrayVeiculo[index]}, Tipo: ${veiculo[arrayVeiculo[index]]}`);
    }
};

console.log('carro');
listar(carro);
console.log('carro1');
listar(carro1);
console.log('moto');
listar(moto);