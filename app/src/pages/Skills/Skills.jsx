import './Skills.css'
import HtmlImg from '../../components/imgs/HtmlImg'
import CssImg from '../../components/imgs/CssImg'
import JavaScrptImg from '../../components/imgs/JavaScriptImg'
import TypeScriptImg from '../../components/imgs/TypeScriptImg'
import ReactImg from '../../components/imgs/ReactImg'
import NodeImg from '../../components/imgs/NodeImg'
import GitImg from '../../components/imgs/GitImg'
import MySQL from '../../components/imgs/MySQL'
import PrismaImg from '../../components/imgs/PrismaImg'
import MongoDBImg from '../../components/imgs/MongoDBImg'
import SassImg from '../../components/imgs/SassImg'
import FireBaseImg from '../../components/imgs/FireBaseImg'

import { BulletPoint } from '../../components/BulletPoint/BulletPoint'

export function Skills() {
    return (
        <section className='skills-section' id='skills-section'>
            <header><BulletPoint />Skills</header>

            <div className='skills-content'>
                <div className="line">
                    <div className='cel'><CssImg /> <p>CSS3</p></div>
                    <div className='cel'><HtmlImg /> <p>HTML5</p></div>
                    <div className='cel'>< JavaScrptImg /> <p>JavaScript</p></div>
                    <div className='cel'><TypeScriptImg /> <p>TypeScript</p></div>
                </div>
                <div className="line">
                    <div className='cel'><SassImg /> <p>Sass</p></div>
                    <div className='cel'><ReactImg /> <p>React</p></div>
                    <div className='cel'><NodeImg /> <p>Node</p></div>
                    <div className='cel'><FireBaseImg /> <p>FireBase</p></div>
                </div>
                <div className="line">
                    <div className='cel'><MySQL /> <p>MySQL</p></div>
                    <div className='cel'><MongoDBImg /> <p>MongoDB</p></div>
                    <div className='cel'><PrismaImg /> <p>Prisma</p></div>
                    <div className='cel'><GitImg /><p>Git</p></div>
                </div>
            </div>
        </section>
    )
}