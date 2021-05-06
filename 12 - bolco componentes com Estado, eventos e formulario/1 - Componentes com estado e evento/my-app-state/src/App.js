
import React from 'react';

function handleClick() {
  console.log('clicou')
}

class App extends React.Component{
  render() {

    return (
     <button onClick={handleClick}> carrinho </button>
    )
  }

}
export default App;
