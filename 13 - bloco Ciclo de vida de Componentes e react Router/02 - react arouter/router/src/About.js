import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
      <div>
         <Link to="/">Voltar Home</Link>
        <h1>Minha About</h1>

      </div>
    )
  }
}
export default About;