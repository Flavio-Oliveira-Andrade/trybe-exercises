import Name from './components/exercises'
import Image from './components/image'
import App1 from './components/album'
import Logo from './logo.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <Name name='Flavio' lastName='Andrade'/>
      <Image source={Logo} alt='logo'/>
      <App1/>
    </div>
  );
}

export default App;
