import React from 'react'
import bg from "../../public/img/bg.jpg"
import Image from 'next/image'

const Historia = () => {
    const style = {
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
    }

    return (
        <section id="historia" className="historia" style={style}>
            <h2>da orta para o mundo</h2>
            <p>
                Tudo começou em clima de família, lá em 1992, em
                volta da mesa, no quinta de casa. Os amigos foram
                chegando, o número de visital foi crescendo, e,
                naturalmente, quando percebemos, estávamos recebendo
                turistas e todos que vinham atrás do sabor único da nossa
                pizza
            </p>
            <p>
                Os ingredientes são selecionados, sempre frescos e preparados por nós.
                O mel é colhido de nosso apiário, tudo com muito amor e carinho em meio
                a natureza viva da Chapada Diamantina.
            </p>
            <p>
                A lenha utilizada é toda de reflorestamento e mantemos um viveiro de mudas nativas,
                afirmando nosso compromisso com a natureza.
            </p>
            <p className="!font-semibold">Saboreiem com prazer !</p>
            <Image className="w-auto h-48 absolute bottom-2 right-2 z-20" alt="arvore" src="/img/arvore_historia.png" width={1024} height={1024} />
        </section>
    )
}

export default Historia
