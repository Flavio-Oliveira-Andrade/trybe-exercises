import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Howto extends Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar Home</Link>
        <h1>Minha Howto </h1>
      </div>
    )
  }
}
export default Howto;