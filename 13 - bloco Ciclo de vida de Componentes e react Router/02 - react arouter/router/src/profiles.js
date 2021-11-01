import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Profiles extends Component {
  render() {
    const { ship } = this.props.match.params
    return (
      <div>
        <Link to="/">Voltar Home </Link>
        <h1>Minha Profiles {this.props.name}, do navio { ship }</h1>
      </div>
    )
  }
}
export default Profiles;