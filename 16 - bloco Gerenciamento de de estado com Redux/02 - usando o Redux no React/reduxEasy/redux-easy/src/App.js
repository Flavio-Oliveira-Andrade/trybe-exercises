import React from 'react';
import './App.css';

function App() {
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

export default App;
