import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
    }
  }
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Filme favorito" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
