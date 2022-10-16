import { NumberOne } from 'phosphor-react'
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content" >
                <p>© 2022 Thiago Seixas - Design by <span className="highlighted">Thiago Seixas</span></p>
                <p><span className='highlighted'><a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-digitacao-de-codigo_10259340.htm#page=2&position=43&from_view=author" target="_blank">Imagem de storyset</a></span> no Freepik</p>
            </div>
        </footer>
    )
}