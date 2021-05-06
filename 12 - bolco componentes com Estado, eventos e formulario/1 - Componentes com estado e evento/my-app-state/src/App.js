/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
import React from 'react';
class App extends React.Component{
   /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)

  }

  handleClick() {
    console.log(this)
    console.log('clicou')
  }
  handleClick1() {
    console.log(this)
    console.log('clicou1')
  }
  handleClick2() {
    console.log(this)
    console.log('clicou2')
  }
  render() {

    return (
      <div>
        <button onClick={this.handleClick}> carrinho </button>
        <button onClick={this.handleClick1}> carrinho1 </button>
        <button onClick={this.handleClick2}> carrinho2 </button>
     </div>
    )
  }

}
export default App;
