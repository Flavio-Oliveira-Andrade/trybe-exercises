import React from 'react'

class Form extends React.Component {
  render() {
    return(
      <div>
        <h1>Formulario em React</h1>
        <form>
          <fieldset>
            <legend> marcação de cursos</legend>
            <input type="radio" id="radio"  />
            <label htmlFor="radio">Javascrips</label>
            <input type="radio" id="radio1" checked />
            <label htmlFor="radio1">React</label>
          </fieldset>
          <fieldset>
            <legend>Dados Pessoal</legend>
            <label>
              Nome
              <input type="text"/>
            </label>
            <label>
              Email
              <input type="email"/>
            </label>

          </fieldset>
        </form>
      </div>
    )
  }
}
export default Form;