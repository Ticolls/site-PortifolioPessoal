import './App.css'

import { BrowserRouter, useLocation } from "react-router-dom";

import { Header } from './components/Header/Header'


import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes';

import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';


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
