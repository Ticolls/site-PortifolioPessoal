import './Header.css'

import { Link } from 'react-scroll'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

import { motion } from 'framer-motion'

export function Header() {

    const [burgerOpen, setBurgerOpen] = useState(false)

    return (
        <header className='header-container'>
            <div className='header-content'>
                <Link className='logo' to='home-section' smooth={true} offset={-100}>
                    <div className='details'>
                        &lt;/
                    </div>

                    <p>Thiago Seixas</p>

                    <div className='details'>
                        &gt;
                    </div>
                </Link>
                <nav>
                    <Link href="#" className="anchor" to='home-section' smooth={true} offset={-100}>Home</Link>
                    <Link href="#" className="anchor" to='about-section' smooth={true} offset={-80}>About</Link>
                    <Link href="#" className="anchor" to='projects-section' smooth={true} offset={-80}>Projects</Link>
                    <Link href="#" className="anchor" to='skills-section' smooth={true} offset={-80}>Skills</Link>
                    <Link href="#" className="anchor" to='contact-section' smooth={true} offset={-80}>Contact</Link>
                </nav>
                <button className='burger-root' onClick={() => setBurgerOpen(true)}>
                    <List />
                </button>
                {
                    burgerOpen ? (
                        <motion.div className="menu-background"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        >
                            <div className='close-root' onClick={() => setBurgerOpen(false)}>
                                <X />
                            </div>
                            <div className='menu'>
                                <Link href="#" className="anchor" onClick={() => setBurgerOpen(!burgerOpen)} to='home-section' smooth={true} offset={-100}>Home</Link>
                                <Link href="#" className="anchor" onClick={() => setBurgerOpen(!burgerOpen)} to='about-section' smooth={true} offset={-80}>About</Link>
                                <Link href="#" className="anchor" onClick={() => setBurgerOpen(!burgerOpen)} to='projects-section' smooth={true} offset={-80}>Projects</Link>
                                <Link href="#" className="anchor" onClick={() => setBurgerOpen(!burgerOpen)} to='skills-section' smooth={true} offset={-80}>Skills</Link>
                                <Link href="#" className="anchor" onClick={() => setBurgerOpen(!burgerOpen)} to='contact-section' smooth={true} offset={-80}>Contact</Link>
                            </div>
                        </motion.div>
                    ) : null
                }


            </div>
        </header >
    )
}