import React from 'react'

function header (n, sobr)  {
  let nome = 'Flavio Oliveira de Andrade '
  const curso = () => {
    return ('Estudando React na Trybe')
  }
  function txt() {
    return ('Hello Word')
  }
  return (
    <header>
      <h1> {curso()} </h1>
      <h3> {txt()} </h3>
      <h2> Aluno: {nome}</h2>
    </header>
  )
}
export default header;