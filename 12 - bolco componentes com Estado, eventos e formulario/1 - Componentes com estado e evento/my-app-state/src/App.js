/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe!
💡 Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!
*/
import React from 'react';
class App extends React.Component{
   /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  constructor() {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()
    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroCliques: 0,
    }

  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroCliques: estadoAnterior.numeroCliques + 1

    }))
  }


  render() {
    console.log(this)
    return (
      <div>
        <button onClick={this.handleClick}> click  </button>
        <br/>
        <span>clicks= {this.state.numeroCliques}</span>
     </div>
    )
  }

}
export default App;
