import React from 'react'

function Funcional(){

  function randomnumber(){
    return (
      Math.floor(Math.random() *100)
    )
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     randomnumber();

  //   }, 2000)

  // },[])

  return(
    <div>
      {`Hello! My name is Flavio ${randomnumber()}`}
    </div>
  )
}

export default Funcional;