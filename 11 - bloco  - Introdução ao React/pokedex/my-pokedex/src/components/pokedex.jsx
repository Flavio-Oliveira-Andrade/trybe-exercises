import React from 'react'
// import PropTypes from 'prop-types'
import data from'./data'

class Pokedex extends React.Component {
  render(){
    return(
      data.map((item) =>
        <div>
          <key>{item.id}</key>
          <img src={item.image} alt={item.name}/>
          <h3>{item.name}</h3>
          <h4>{item.type}</h4>
        </div> )
    )
  }
}

// Pokedex.propTypes = {
//   nome: PropTypes.string
// }

export default Pokedex;