import React, { Component } from 'react'

class Task extends Component {
  render(){
    const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar", "viajar", "comer"];
    return(
      <ul>{ tarefas.map(tarefa => <li>{tarefa}</li> )}</ul>
    )
  }
}

export default Task;