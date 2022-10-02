import './About.css'

export function About() {
    return (
        <section className='about-section'>
            <div className='perfil'>
                <div className='img-container'>
                    {/* <img src="" alt="foto pessoal" /> */}
                </div>

                <p>Thiago Seixas</p>
            </div>
            <div className='text'>
                <header> <div className='point'> <div className='square'></div> </div> Sobre</header>
                <h3>Conheça um pouco sobre mim</h3>
                <p>Olá, me chamo Thiago Luiz Antunes Seixas, tenho 19 anos e sou estudante de Ciências da Computação pela Universidade Federal da Bahia (UFBA). Estudo programação desde os meus 16 anos durante meu período colegial. De cara me apaixonei pela área e vi a oportunidade de transformar um hobby em trabalho.</p>
                <p>Com isso, venho estudando, tanto pela faculdade, quanto de forma autônoma para aperfeiçoar minhas habilidades e competências na área de desenvolvimento que eu tanto amo. Atualmente, estudo e trabalho com desenvolvimento web FullStack.</p>
            </div>
        </section>
    )
}