import { Routes, Route, useLocation, } from "react-router-dom";

import { Home } from '../../pages/Home/Home'
import { About } from '../../pages/About/About';
import { Skills } from '../../pages/Skills/Skills'
import { Projects } from '../../pages/Projects/Projects'
import { Contact } from '../../pages/Contact/Contact'

import { AnimatePresence } from 'framer-motion'


export function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}