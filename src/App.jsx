import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  return (
    <>
      <Header home="Home" serv="Serviço" cont="Contatos" blog="Blog"/>
      <Main />
      <Footer home="Home" serv="Serviço" cont="Contatos" blog="Blog"/>
    </>
  )
}

export default App
