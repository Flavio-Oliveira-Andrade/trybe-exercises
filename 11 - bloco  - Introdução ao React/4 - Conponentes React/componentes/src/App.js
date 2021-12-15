import React  from "react";
import Conversor from './coponentes/conversor'
import './App.css';

function App() {
  return (
    <div className="App">
      <Conversor moedaA='USD' moedaB='BRL'></Conversor>
    </div>
  );
}

export default App;
