/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
import React from 'react';

function handleClick() {
  console.log('clicou')
}
function handleClick1() {
  console.log('clicou1')
}
function handleClick2() {
  console.log('clicou2')
}

class App extends React.Component{
   /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {

    return (
      <div>
        <button onClick={handleClick}> carrinho </button>
        <button onClick={handleClick1}> carrinho1 </button>
        <button onClick={handleClick2}> carrinho2 </button>
     </div>
    )
  }

}
export default App;
