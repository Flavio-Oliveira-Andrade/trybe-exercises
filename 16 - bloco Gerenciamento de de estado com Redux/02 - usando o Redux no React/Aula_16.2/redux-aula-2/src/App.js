import React from 'react'
import Header from './components/Header'
import Player from './components/Player';
import SideBar from './components/SideBar';
import './App.css';

class App extends React.Component() {
  constructor(props) {
    super(props)

    this.state = {
      categories: categoriesDate,
    }
  }


  render(){
    return(
      <div>
        <Header />
        <main>
          <Player movie={ categories[0].movies[0] } />
          <SideBar categories={ categories }/>
        </main>

      </div>
    )
  }
}



export default App;
