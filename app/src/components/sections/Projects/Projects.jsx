import './Projects.css'

import { BulletPoint } from '../../BulletPoint/BulletPoint'

export function Projects() {
    return (
        <section className='projects-section'>
            <header><BulletPoint />Projects</header>

            <div className="projects-content">
                <div className="card">
                    <div className='view-box'></div>
                    <div className='text-box'>
                        <h4>meumodelodecurriculo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, ad? Voluptates expedita ut, laboriosam quo.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='view-box'></div>
                    <div className='text-box'>
                        <h4>Projeto 2</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere expedita modi vel iure.</p>
                    </div>
                </div>
                <div className="card">
                    <div className='view-box'></div>
                    <div className='text-box'>
                        <h4>Projeto 3</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}