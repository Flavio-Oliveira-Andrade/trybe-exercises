import  React from 'react';
import Header from './componentes/header'
import Body from './componentes/body'
import Footer from './componentes/footer'
import Props from './componentes/props'
import cla from './componentes/class'

// exemplo export default function app() {}
function App() {
  const html = '511111 trybe meses de curso'
  const css = '1 mes de curso'
  const script = ' meses'
  const ls = ( ) => '10 projetos'

  return (
    <>
      <Header/>
      <Body/>
      <cla/>
      <Footer/>
      <Props
        HTML= {html}
        CSS= {css}
        Javascript= {script}
        React= {ls()}
        />
    </>
  )
}

export default App;
