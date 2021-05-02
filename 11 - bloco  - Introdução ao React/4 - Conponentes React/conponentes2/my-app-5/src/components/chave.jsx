import React from 'react';

class Chaves extends React.Component {
  render(){
    const list = ['leite', 'arroz', 'feijão', 'banana', 'carne', 'banana'];
    return(
      list.map((item) => (
        <p>{item}</p>
      )

      )
    )
  }
}
export default Chaves;
