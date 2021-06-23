import React, { useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1'},
    { id: 1, name: 'repo-2'},
    { id: 1, name: 'repo-3'},
  ]);

  return (
    <div >
      hello flavio
    </div>
  );
}

export default App;
