import React, { useState } from 'react'
import bg from "../../public/img/bg.jpg"
import Image from 'next/image'
import CallAction from './CallAction'

const Pizzaria = () => {
    const [leaves, setLeaves] = useState(30)
    const style = {
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
    }
    return (
        <section id="pizzaria" className="pizzaria" style={style}>
            <CallAction />
            <Image className="arvore" alt="arvore" src="/img/arvores.png" width={1024} height={1024} />
            <div id="leaves">
                {
                    [...Array(leaves)].map((leaf, i) => <i key={i}></i>)
                }
            </div>
        </section>
    )
}

export default Pizzaria
