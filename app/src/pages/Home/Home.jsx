import './Home.css'

import { CodeImg } from '../../components/imgs/CodeImg/CodeImg'

import { motion } from 'framer-motion'
import { Button } from '../../components/Button/Button'

import { DownloadSimple } from 'phosphor-react'

export function Home() {

    function downloadCurriulum() {
        alert("em breve")
    }

    return (

        <section className='home-section'>
            <div className='home-content'>
                <div className='info-container'>
                    <div className='texts'>
                        <p className='title'>Desenvolvedor Full-Stack</p>
                        <h1 className='name'>Thiago Seixas</h1>
                        <p className='description'>Estudante de ciências da computação pela Universidade Federal da Bahia (UFBA). Apaixonado por tecnologia e pelo mundo do desenvolvimento.</p>
                    </div>
                    <div className='button-area'>
                        <Button.Root onClick={downloadCurriulum}>
                            <Button.Icon><DownloadSimple /></Button.Icon>
                            <Button.Text>Baixar currículo</Button.Text>
                        </Button.Root>
                    </div>
                </div>
                <div className='img-container'>
                    <CodeImg />
                </div>
            </div>
        </section>

    )
}

