import './Header.css'

import { Link, useLocation } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'

export function Header() {

    let location = useLocation()

    const [navStatus, setNavStatus] = useState(location)

    useEffect(() => {
        setNavStatus(location.pathname)
    }, [location])


    return (
        <header className='header-container'>
            <div className='header-content'>
                <Link className='logo' to='/'> <div className='details'>&lt;/ </div>Thiago Seixas<div className='details'> &gt;</div></Link>
                <nav>
                    <Link href="#" className={navStatus == "/" ? "anchor active" : "anchor"} to='/'>Home</Link>
                    <Link href="#" className={navStatus == "/about" ? "anchor active" : "anchor"} to='about'>About</Link>
                    <Link href="#" className={navStatus == "/skills" ? "anchor active" : "anchor"} to='skills'>Skills</Link>
                    <Link href="#" className={navStatus == "/projects" ? "anchor active" : "anchor"} to='projects'>Projects</Link>
                    <Link href="#" className={navStatus == "/contact" ? "anchor active" : "anchor"} to='contact'>Contact</Link>
                </nav>
            </div>
        </header >
    )
}