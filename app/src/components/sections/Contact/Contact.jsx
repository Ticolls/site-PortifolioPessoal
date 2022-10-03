import './Contact.css'

import { BulletPoint } from '../../BulletPoint/BulletPoint'

import GitHubIcon from '../../imgs/GitHubIcon'
import MessageIcon from '../../imgs/MessageIcon'
import LinkedinIcon from '../../imgs/LinkedinIcon'
import EmailIcon from '../../imgs/EmailIcon'

export function Contact() {
    return (
        <section className='contact-section'>
            <header><BulletPoint />Contact</header>

            <div className="contact-content">
                <p>Fique a vontande de entrar em contato comigo, será um prazer atende-lo. Estou disponível todos os dias.</p>
                <div className='links'>
                    <div className="link"><GitHubIcon /> <p>https://github.com/Ticolls</p></div>
                    <div className="link"><MessageIcon />  <p>WhatsApp</p></div>
                    <div className="link linkedin"><LinkedinIcon /> <p>https://www.linkedin.com/in/thiago-seixas-4b5781251/</p> </div>
                    <div className="link"><EmailIcon /> <p>ticolls@hotmail.com</p></div>
                </div>
            </div>
        </section>
    )
}