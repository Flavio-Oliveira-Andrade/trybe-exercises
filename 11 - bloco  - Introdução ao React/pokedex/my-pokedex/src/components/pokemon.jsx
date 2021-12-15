import React from 'react';
import Pokedex from './pokedex'


class Pokemon extends React.Component {
  render(){
    const { name, id, type, image,  } = this.props
    return(
      <div>
        <Pokedex name={name} id={id} type={type} image={image}/>
      </div>
    )
  }
}

export default Pokemon;