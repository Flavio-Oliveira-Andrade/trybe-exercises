// const callback; // é uma função passada por paramentro para outra função,
// setTimeout; // esta função redebe dois paramtros  ( função , callback) que passamos ,atraves
// // de um arrow function , eo segundo é tempo que o interpretador ira esperar para executar
// // a função atraves do arrow function ,

const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;


const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses

  console.log(`balanço do mẽs:
  Recebido: r$${myIncome},00
  gasto: r$${totalExpenses},00
  Saldo: r$${totalAfterExpenses},00`);

}

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// Por fim podemos observar a implementação da nossa função callback representada pela função handleExpenses . Esta função está tratando as informações contidas no array de objetos myExpenses e retornando o valor total de gastos.
// Em síntese o que fizemos foi:
// Criamos variáveis que representam o quanto recebemos no mês e o quanto gastamos no mês.
// Implementamos a função monthlyBudget que recebe três parâmetros, nossos gastos, nossa renda e a função callback .
// Realizamos a implementação da função callback representada por handleExpenses que recebe nossos gastos mensais e retorna um valor de gastos total.
// Adicionamos handleExpenses na chamada da função monthlyBudget e como resultado temos o balanço mensal.

const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {
  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item => Object.values(item)));
  const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0] , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// Balanço do mês:
//     Recebido: R$1000,00
//     Gasto: R$459,00
//     Saldo: R$541,00