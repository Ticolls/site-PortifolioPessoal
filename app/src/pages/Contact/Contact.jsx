import './Contact.css'

import { BulletPoint } from '../../components/BulletPoint/BulletPoint'

import GitHubIcon from '../../components/imgs/GitHubIcon'
import MessageIcon from '../../components/imgs/MessageIcon'
import LinkedinIcon from '../../components/imgs/LinkedinIcon'
import EmailIcon from '../../components/imgs/EmailIcon'

import { motion } from 'framer-motion'

export function Contact() {
    return (
        <motion.section
            className='contact-section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            <header><BulletPoint />Contact</header>

            <div className="contact-content">
                <p>Fique a vontande para entrar em contato comigo, será um prazer atende-lo. Estou disponível todos os dias.</p>
                <div className='links'>
                    <a className="link" href='https://github.com/Ticolls' target="_blank"><GitHubIcon /> <p>https://github.com/Ticolls</p></a>
                    <a className="link"><MessageIcon />  <p>WhatsApp</p></a>
                    <a className="link linkedin" href='https://www.linkedin.com/in/thiago-seixas-4b5781251/' target="_blank"><LinkedinIcon /> <p>https://www.linkedin.com/in/thiago-seixas-4b5781251/</p> </a>
                    <a className="link"><EmailIcon /> <p>ticolls@hotmail.com</p></a>
                </div>
            </div>
        </motion.section>
    )
}