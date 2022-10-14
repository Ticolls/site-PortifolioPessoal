import './Home.css'

import { CodeImg } from '../../components/imgs/CodeImg/CodeImg'

export function Home() {

    return (

        <section className='home-section'>
            <div className='home-content'>
                <div className='info-container'>
                    <div className='texts'>
                        <p className='title'>Desenvolvedor Full-Stack</p>
                        <h1 className='name'>Thiago Seixas</h1>
                        <p className='description'>Estudante de ciências da computação pela Universidade Federal da Bahia (UFBA). Apaixonado por tecnologia e pelo mundo do desenvolvimento.</p>
                    </div>
                    <button>Baixar Currículo</button>
                </div>
                <div className='img-container'>
                    <CodeImg />
                </div>
            </div>
        </section>

    )
}

/* <a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-digitacao-de-codigo_10259340.htm#page=2&position=43&from_view=author">Imagem de storyset</a> no Freepik */