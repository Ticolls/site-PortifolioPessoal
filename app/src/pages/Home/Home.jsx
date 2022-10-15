import './Home.css'

import { CodeImg } from '../../components/imgs/CodeImg/CodeImg'

import { motion } from 'framer-motion'
import { Button } from '../../components/Button/Button'

import { DownloadSimple } from 'phosphor-react'

export function Home() {

    return (

        <motion.section
            className='home-section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            <div className='home-content'>
                <div className='info-container'>
                    <div className='texts'>
                        <p className='title'>Desenvolvedor Full-Stack</p>
                        <h1 className='name'>Thiago Seixas</h1>
                        <p className='description'>Estudante de ciências da computação pela Universidade Federal da Bahia (UFBA). Apaixonado por tecnologia e pelo mundo do desenvolvimento.</p>
                    </div>
                    <Button.Root>
                        <Button.Text>Baixar currículo</Button.Text>
                        <Button.Icon><DownloadSimple /></Button.Icon>
                    </Button.Root>
                </div>
                <div className='img-container'>
                    <CodeImg />
                </div>
            </div>
        </motion.section>

    )
}

/* <a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-digitacao-de-codigo_10259340.htm#page=2&position=43&from_view=author">Imagem de storyset</a> no Freepik */