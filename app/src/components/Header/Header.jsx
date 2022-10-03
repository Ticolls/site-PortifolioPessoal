import './Header.css'

export function Header() {
    return (
        <header className='header-container'>
            <h1> <div className='details'>&lt;/ </div>Thiago Seixas<div className='details'> &gt;</div></h1>
            <nav>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}