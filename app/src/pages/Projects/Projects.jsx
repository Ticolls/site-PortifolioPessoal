import './Projects.css'

import { BulletPoint } from '../../components/BulletPoint/BulletPoint'

import { motion } from 'framer-motion'

import { Card } from '../../components/Card/Card'
import { useState } from 'react'

const cards = [
    {
        id: 1,
        img: "",
        header: "Em breve",
        p: "Lorem Ipsum afddio gadsg bidsbvj nvid sansdui vdnci ddpibdaaas iudsbauib ",
        tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Node", "Prisma"]

    },
    {
        id: 2,
        img: "",
        header: "Em breve",
        p: "Lorem Ipsum afddioga ds gbidsbvjn vids ansduivd nciddpibdaaas iudsbauib ",
        tags: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
        id: 3,
        img: "",
        header: "Em brece",
        p: "Lorem Ipsum afddi ogadsgbi dsbvj nvidsa nsdui vdn ciddp ibdaaas iudsbauib ",
        tags: ["HTML5", "CSS3", "JavaScript", "Java", "MySQL"]

    }
]

export function Projects() {
    return (
        <section className='projects-section'>
            <header><BulletPoint />Projects</header>

            <div className="projects-content">

                {
                    cards.map(card => {
                        return (
                            <Card
                                key={card.id}
                                img={card.img}
                                header={card.header}
                                p={card.p}
                                tags={card.tags}
                            />
                        )
                    })
                }


                {/*                 <Card.Root>
                    <Card.ViewBox />
                    <Card.Header>Projeto 1</Card.Header>
                    <Card.P>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.P>
                </Card.Root>

                <Card.Root>
                    <Card.ViewBox />
                    <Card.Header>Projeto 2</Card.Header>
                    <Card.P>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Card.P>
                </Card.Root>

                <Card.Root>
                    <Card.Header>Projeto 3</Card.Header>
                    <Card.P>lorem ipsum ad afondfiabsgosdhb b aohdb adbgagbsdgbdugabdsiudsbagi</Card.P>
                    <Card.Tags>
                        <Card.Tag>HTML5</Card.Tag>
                        <Card.Tag>CSS3</Card.Tag>
                        <Card.Tag>React</Card.Tag>
                        <Card.Tag>Typescript</Card.Tag>
                        <Card.Tag>Prisma</Card.Tag>
                        <Card.Tag>MongoDB</Card.Tag>
                        <Card.Tag>Node</Card.Tag>
                    </Card.Tags>
                    <Card.Button>
                        Acessar
                    </Card.Button>
                </Card.Root>
 */}
            </div>
        </section>
    )
}