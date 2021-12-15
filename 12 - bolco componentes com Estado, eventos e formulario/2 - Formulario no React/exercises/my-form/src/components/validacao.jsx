import React, { Component } from 'react'
import PersonalFieldset from './PersonalFieldset';
import DataFieldset from './DataFieldset';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
      formularioComErros: false,
    };
  }

  updateErrorState = (bool) => { this.setState({ formularioComErros: bool }) }

  handleError(name, value) {
    const { updateErrorState } = this;
    switch(name) {
      case 'name':
        const isNameInvalid = !(value.length >= 3);
        updateErrorState(isNameInvalid);
        break;
      case 'email':
        const isEmailInvalid = !(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i));
        updateErrorState(isEmailInvalid);
        break;
      case 'age':
        const isAgeInvalid = !(value.length > 0);
        updateErrorState(isAgeInvalid);
        break;
      case 'anecdote':
        const isAnecdoteInvalid = !(value.length > 0);
        updateErrorState(isAnecdoteInvalid);
        break;
      case 'terms':
        updateErrorState(!value);
        break;
      default:
        console.error('Unexpected form input');
        break;
    }
  };

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value,
    });
    this.handleError(name, value);
  }

  render() {
    const { formularioComErros } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset handleChange={ this.handleChange } />
          <DataFieldset handleChange={ this.handleChange } />
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
            />
            Concordo com termos e acordos
          </label>
        </form>
        { formularioComErros && 'Formulário inválido' }
      </div>
    );
  }
}

export default Form;