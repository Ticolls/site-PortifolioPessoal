import './Header.css'

import { Link } from 'react-scroll'

export function Header() {


    return (
        <header className='header-container'>
            <div className='header-content'>
                <Link className='logo' to='home-section' smooth={true} offset={-100}> <div className='details'>&lt;/ </div>Thiago Seixas<div className='details'> &gt;</div></Link>
                <nav>
                    <Link href="#" className="anchor" to='home-section' smooth={true} offset={-100}>Home</Link>
                    <Link href="#" className="anchor" to='about-section' smooth={true} offset={-80}>About</Link>
                    <Link href="#" className="anchor" to='projects-section' smooth={true} offset={-80}>Projects</Link>
                    <Link href="#" className="anchor" to='skills-section' smooth={true} offset={-80}>Skills</Link>
                    <Link href="#" className="anchor" to='contact-section' smooth={true} offset={-80}>Contact</Link>
                </nav>
            </div>
        </header >
    )
}