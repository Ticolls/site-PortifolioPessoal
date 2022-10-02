import './Home.css'

import { CodeImg } from '../../components/CodeImg/CodeImg'

import { Header } from '../../components/Header/Header'

import { About } from '../../components/About/About'

export function Home() {

    return (
        <div className='home'>
            <Header />
            <main>
                <section className='master-view'>
                    <div className='info-container'>
                        <div className='texts'>
                            <p className='title'>Desenvolvedor Full-Stack</p>
                            <h1 className='name'>Thiago Seixas</h1>
                            <p className='description'>Estudante de ciências da computação pela Universidade Federal da Bahia (UFBA) e apaixonado por tecnologia e pelo mundo do desenvolvimento.</p>
                        </div>
                        <button>Baixar Currículo</button>
                    </div>
                    <div className='img-container'>
                        <CodeImg />
                    </div>
                </section>

                <div className='division'></div>

                <About />

                <div className='division'></div>
            </main>

        </div>
    )
}