import './App.css'

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import { Header } from './components/Header/Header'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills'
import { Projects } from './pages/Projects/Projects'
import { Contact } from './pages/Contact/Contact'
import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <div className='app'>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
