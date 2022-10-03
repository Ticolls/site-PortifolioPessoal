import './Home.css'

import { CodeImg } from '../../components/imgs/CodeImg/CodeImg'

import { Header } from '../../components/Header/Header'

import { About } from '../../components/sections/About/About'
import { Skills } from '../../components/sections/Skills/Skills'
import { Contact } from '../../components/sections/Contact/Contact'

import { Division } from '../../components/Division/Division'

export function Home() {

    return (
        <div className='home'>
            <Header />
            <main>
                <section className='master-view' id='master-view'>
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
                </section>

                <Division />
                <About />
                <Division />
                <Skills />
                <Division />
                <Contact />
                <Division />

            </main>

        </div>
    )
}

/* <a href="https://br.freepik.com/vetores-gratis/ilustracao-do-conceito-de-digitacao-de-codigo_10259340.htm#page=2&position=43&from_view=author">Imagem de storyset</a> no Freepik */