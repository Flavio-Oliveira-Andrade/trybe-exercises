import React, { useState } from 'react';
import PersonalContext from '../context/PersonalContext';


function PersonalProvider(props){

  const [ tasks, setTasks ] = useState([])
  const context = {
    tasks,
    setTasks
  }
  return(
    <PersonalContext.Provider value={context}>
      <props.children />
    </PersonalContext.Provider>

  )
}

export default PersonalProvider;