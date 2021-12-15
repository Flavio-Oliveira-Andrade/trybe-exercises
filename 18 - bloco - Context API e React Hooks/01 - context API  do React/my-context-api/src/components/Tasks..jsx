import React, { useContext } from 'react';
import PersonalContext from '../context/PersonalContext'

function Tasks(){
  const {tasks} = useContext(PersonalContext)
  return (
    <ul>
      { tasks.map((task, index) =>
      <li key={index.task}>{task}</li>)}
    </ul>
  )
}

export default Tasks;