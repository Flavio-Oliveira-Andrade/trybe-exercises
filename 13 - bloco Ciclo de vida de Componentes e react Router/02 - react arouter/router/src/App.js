import React from 'react'
import Home from './Home'
import About from './About'
import Howto from './Howto'
import Profiles from './profiles'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/howto" component={Howto} />
        <Route  path="/profiles/:ship" render={ (props) => <Profiles {...props} name="Barba Ruivaaaa "/>} />
      </BrowserRouter>
    )
  }
}

// const ComponentePai = (props) => {
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }

export default App;
