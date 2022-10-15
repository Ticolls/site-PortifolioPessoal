import './App.css'

import { BrowserRouter } from "react-router-dom";

import { Header } from './components/Header/Header'


import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes';

import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <div className='app'>
      <BrowserRouter>

        <Header />
        <AnimatedRoutes />
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App
