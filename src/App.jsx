import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Home from './components/content/Home'
import Servico from './components/content/Servico'
import Contato from './components/content/Contato'
import Blog from './components/content/Blog'


function App() {

  return (
    <BrowserRouter>
      <Header home="Home" serv="Serviço" cont="Contatos" blog="Blog"/>

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servico' element={<Servico />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/main' element={<Main />} />
      </Routes>

      <Footer home="Home" serv="Serviço" cont="Contatos" blog="Blog"/>
    </BrowserRouter>
  )
}

export default App
