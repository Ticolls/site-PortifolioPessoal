import './Header.css'

import { Link, animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'

export function Header() {

    const [navStatus, setNavStatus] = useState("home")

    function handleScroll() {
        if (document.documentElement.scrollTop < 300) {
            setNavStatus("home")
        }

        if (document.documentElement.scrollTop >= 300 && document.documentElement.scrollTop < 800) {
            setNavStatus("about")
        }

        if (document.documentElement.scrollTop > 800) {
            setNavStatus("skills")
        }
    }


    window.onscroll = () => handleScroll()

    return (
        <header className='header-container'>
            <div className='header-content'>
                <Link className='logo' to='master-view' smooth={true} offset={-100}> <div className='details'>&lt;/ </div>Thiago Seixas<div className='details'> &gt;</div></Link>
                <nav>
                    <Link href="#" className={navStatus == "home" ? "link active" : "link"} to='master-view' smooth={true} offset={-100}>Home</Link>
                    <Link href="#" className={navStatus == "about" ? "link active" : "link"} to='about-section' smooth={true} offset={-180}>About</Link>
                    <Link href="#" className={navStatus == "skills" ? "link active" : "link"} to='skills-section' smooth={true} offset={-130}>Skills</Link>
                    <Link href="#" className='link' to='projects-section'>Projects</Link>
                    <Link href="#" className='link' to='contact-section'>Contact</Link>
                </nav>
            </div>
        </header >
    )
}