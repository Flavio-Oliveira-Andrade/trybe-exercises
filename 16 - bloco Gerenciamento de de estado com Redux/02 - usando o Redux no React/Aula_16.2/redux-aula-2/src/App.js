
import React from 'react'
import Header from './components/Header'
import Player from './components/Player';
import Sidebar from './components/SideBar';
import './index.css';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </>
    );
  }
}

export default App;

