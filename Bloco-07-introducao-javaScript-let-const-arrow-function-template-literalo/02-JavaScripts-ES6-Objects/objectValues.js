const carro = {
  cor: 'verde',
  ano: 2006,
  marca: 'ford'
}

const moto = {
  cor: 'vermelha',
  ano: 2018,
  marca: 'Yamaha'
}

const listar = (auto) => Object.values(auto);
console.log(listar(carro));
console.log(listar(moto));

const list = (item) => Object.keys(item);
console.log(list(carro));