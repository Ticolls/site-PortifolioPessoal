import './Card.css'
import { Button } from '../Button/Button'
import { useState } from 'react'

export function Card(props) {

    const [flip, setFlip] = useState(false)

    if (!flip) {
        return (
            <div className='card-root front' onClick={() => setFlip(!flip)}>
                <div className="card-viewbox">
                    {/* <img src={props.img} alt="Imagem do card" /> */}
                </div>
                <h4 className="card-header">{props.header}</h4>
                <p className="card-p">{props.p}</p>
            </div>
        )
    } else {
        return (
            <div className='card-root back' onClick={() => setFlip(!flip)}>
                <h4 className="card-header">{props.header}</h4>
                <p className="card-p">{props.p}</p>
                <div className='card-tags-container'>
                    <div className='card-tags'>
                        {props.tags.map((tag, i) => {
                            return (
                                <div className='card-tag' key={i}>{tag}</div>
                            )
                        })}
                    </div>
                </div>
                <Button.Root>
                    <Button.Text>
                        Acessar
                    </Button.Text>
                </Button.Root>
            </div>
        )
    }


}