import React from 'react';
import EstadoFavorito from './EstadoFavorito'

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      estadoFavorito:'',
      email: '',
      idade:0,
      vaiComparecer: false,
      palavraChaveFavorita: '',

    }

  }

  handleChange({target}) {
    const {name, } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div>
        <span>Formulario em React</span>
        <form>
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <label>
            Email
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
            Nome
            <input type="nome" name="nome" value={this.state.nome} onChange={this.handleChange} />
          </label>

          <label>
            idade
            <input type="number" name="idade" value={this.state.idade} onChange={this.handleChange}/>
          </label>

          <label>
            <input type="checkbox" name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleChange} />
          </label>

          <label>
            escolha sua palavra chave favorita
            <select
            name="palavrachaveFavorita"
            value={this.state.palavraChaveFavorita}
            onChange={this.handleChange}
            >
              <option value="Componente">Componentes </option>
              <option value="Estado">Estado </option>
              <option value="Evento">Evento </option>
              <option value="Props">Props </option>
            </select >
          </label>
        </form>
      </div>
    )
  }


}
export default Form;