import React, { Component } from 'react'

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
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>
            <label>
              Nome:
              <input
                name="name"
                type="text"
                onChange={ this.handleChange }
              />
            </label>
            <label>
              Email:
              <input
                name="email"
                type="email"
                onChange={ this.handleChange }
              />
            </label>
            <label>
              Idade:
              <select
                name="age"
                defaultValue=""
                onChange={ this.handleChange }
              >
                <option value="">Selecione</option>
                <option value="adult">Maior que 18</option>
                <option value="underage">Menor que 18</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Texto e arquivos</legend>
            <label>
              Anedota:
              <textarea
                name="anecdote"
                onChange={ this.handleChange }
              />
            </label>
            <input type="file" />
          </fieldset>
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div>
    );
  }
}

export default Form;


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

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value,
    });
    this.handleError(name, value);
  }