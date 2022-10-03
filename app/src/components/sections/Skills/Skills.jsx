import './Skills.css'
import HtmlImg from '../../imgs/HtmlImg'
import CssImg from '../../imgs/CssImg'
import JavaScrptImg from '../../imgs/JavaScriptImg'
import TypeScriptImg from '../../imgs/TypeScriptImg'
import ReactImg from '../../imgs/ReactImg'
import NodeImg from '../../imgs/NodeImg'
import GitImg from '../../imgs/GitImg'
import MySQL from '../../imgs/MySQL'
import PrismaImg from '../../imgs/PrismaImg'
import MongoDBImg from '../../imgs/MongoDBImg'
import SassImg from '../../imgs/SassImg'
import FireBaseImg from '../../imgs/FireBaseImg'

export function Skills() {
    return (
        <section className='skills-section' id='skills-section'>
            <header> <div className='point'> <div className='square'></div> </div>Skills</header>

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
                    <div className='cel'><p>Node</p><MySQL /> <p>MySQL</p></div>
                    <div className='cel'><MongoDBImg /> <p>MongoDB</p></div>
                    <div className='cel'><PrismaImg /> <p>Prisma</p></div>
                    <div className='cel'><GitImg /><p>Git</p></div>
                </div>
            </div>
        </section>
    )
}