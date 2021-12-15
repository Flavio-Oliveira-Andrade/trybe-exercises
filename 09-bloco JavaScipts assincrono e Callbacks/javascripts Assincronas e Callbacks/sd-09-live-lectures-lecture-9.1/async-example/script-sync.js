
// Faz nosso código ficar parado por X milisegundos
const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration);
}

const function1 = () => {
  sleep(3000);
  console.log('Função 1');
}

const function2 = () => {
  sleep(3000);
  console.log('Função 2');
}

console.log('Antes de chamar as funções');

function1();
function2();

console.log('Depois de chamar as funções');