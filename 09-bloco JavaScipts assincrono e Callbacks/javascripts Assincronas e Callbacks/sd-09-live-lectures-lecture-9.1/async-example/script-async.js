const function1 = () => {
  setTimeout(() => {
    console.log('Função 1');
  }, 2000);
};

const function2 = () => {
  setTimeout(() => {
    console.log('Função 2');
  }, 2000);
};

console.log('Antes de chamar as funções');

function1();
function2();

console.log('Depois de chamar as funções');
