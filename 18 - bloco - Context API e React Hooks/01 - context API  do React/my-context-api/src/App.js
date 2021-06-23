import React, { useState, useEffect } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function getRepositories(){
      const response =await fetch('https://api.github.com/users/Flavio-Oliveira-Andrade/repos')
      const data = await response.json();
      setRepositories(data)
    }
    getRepositories()
  },[])
  // function handleAddRepository(){
  //   setRepositories([
  //     ...repositories,
  //     {id: Math.random(), name: 'repo-match' }
  //   ])
  // }
  function handleFavorites(id) {
    const newRepositories = repositories.map(rep => {
      return rep.id === id ?{...rep , favorite: !rep.favorite} : rep
    })

    setRepositories(newRepositories)
  }

  return (
    <div >
      <ul>
        {repositories.map((rep) =>
        <li key={rep.id}>
          {rep.name}
          {rep.favorite && <span>(favorito)</span>}
         <button onClick={()=>handleFavorites(rep.id)}>
           { !rep.favorite ? 'Favoritar' : 'Desfavoritar' }
           </button></li>
        )}
      </ul>
      {/* <button type="button" onClick={handleAddRepository}>Add</button> */}

    </div>
  );
}

export default App;
