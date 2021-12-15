import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      password: '',
      movie:'',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,

    })
  }
  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            onChange={this.handleChange }
          />
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            onChange={this.handleChange }
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange }
          />
          <input
            type="text"
            id="movie"
            placeholder="Filme favorito"
            onChange={this.handleChange }
          />
          <button type="submit">Enviar</button>
        </form>
        <p>{this.state.nome}</p>
      </div>
    );
  }
}

export default App;
