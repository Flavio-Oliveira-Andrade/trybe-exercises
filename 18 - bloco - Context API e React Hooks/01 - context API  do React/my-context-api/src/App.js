import React, { useState, useEffect } from "react";
import Funcional from "./components/funcional";
import Tasks from "./components/Tasks.";
import PersonalProvider from "./provides/PersonalProvider";

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

  useEffect(() =>{
    const filtered = repositories.filter(rep => rep.favorite);
    document.title = `Você tem ${filtered.length} Favoritos `;

  },[repositories]);

  return (
    <div>
        <div>{new Date().toLocaleTimeString()}</div>
        <div>{new Date().toLocaleDateString()}</div>
        <div>{new Date().toLocaleString()}</div>
        <Funcional />
      <ul>
        {repositories.map((rep) => (
          <li key={rep.id}>
            {rep.name}
            {rep.favorite && <span>(favorito)</span>}
            <button onClick={() => handleFavorites(rep.id)}>
              {!rep.favorite ? "Favoritar" : "Desfavoritar"}
            </button>
          </li>
        ))}
      </ul>
      <PersonalProvider>
        <Tasks />
      </PersonalProvider>
    </div>
  );
}

export default App;
