/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
import React from 'react';

function handleClick() {
  console.log('clicou')
}

class App extends React.Component{
   /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {

    return (
     <button onClick={handleClick}> carrinho </button>
    )
  }

}
export default App;
