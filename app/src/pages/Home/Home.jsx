import './Home.css'

import { CodeImg } from '../../components/imgs/CodeImg/CodeImg'

import { Button } from '../../components/Button/Button'

import { DownloadSimple } from 'phosphor-react'

export function Home() {

    async function downloadCurriculum() {
        fetch("Thiago-Seixas.pdf").then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)

                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = "Thiago-Seixas.pdf"
                alink.click()
            })
        })
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
                        <Button.Root onClick={downloadCurriculum}>
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

