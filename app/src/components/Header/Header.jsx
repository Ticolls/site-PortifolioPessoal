import './Header.css'

import { Link, animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'

export function Header() {

    const [navStatus, setNavStatus] = useState("home")

    function handleScroll() {

        const y = document.documentElement.scrollTop

        if (y < 300) {
            setNavStatus("home")
        }

        if (y >= 300 && y < 800) {
            setNavStatus("about")
        }

        if (y > 800 && y < 1400) {
            setNavStatus("skills")
        }

        if (y > 1400 && y < 1900) {
            setNavStatus("projects")
        }

        if (y > 1900) {
            setNavStatus("contact")
        }
    }


    window.onscroll = () => handleScroll()

    return (
        <header className='header-container'>
            <div className='header-content'>
                <Link className='logo' to='master-view' smooth={true} offset={-100}> <div className='details'>&lt;/ </div>Thiago Seixas<div className='details'> &gt;</div></Link>
                <nav>
                    <Link href="#" className={navStatus == "home" ? "anchor active" : "anchor"} to='master-view' smooth={true} offset={-100}>Home</Link>
                    <Link href="#" className={navStatus == "about" ? "anchor active" : "anchor"} to='about-section' smooth={true} offset={-180}>About</Link>
                    <Link href="#" className={navStatus == "skills" ? "anchor active" : "anchor"} to='skills-section' smooth={true} offset={-130}>Skills</Link>
                    <Link href="#" className={navStatus == "projects" ? "anchor active" : "anchor"} to='projects-section' smooth={true} offset={-165}>Projects</Link>
                    <Link href="#" className={navStatus == "contact" ? "anchor active" : "anchor"} to='contact-section' smooth={true} offset={0}>Contact</Link>
                </nav>
            </div>
        </header >
    )
}