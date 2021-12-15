import React from 'react';
import Oder from './components/order';
import Chaves from './components/chave'

class App extends React.Component {
  render() {
    const { name, id, user, product, } = this.props;

    return(
      <div>
        <Oder name={name}  id={id} user={user} product={product} />
        <Chaves/>
      </div>

    )
  }

}



export default App;
