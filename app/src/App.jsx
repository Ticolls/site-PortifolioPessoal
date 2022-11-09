import './App.css'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { Skills } from './pages/Skills/Skills'
import { Contact } from './pages/Contact/Contact'

function App() {

  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
