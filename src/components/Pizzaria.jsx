import React from 'react'
import bg from "../../public/img/bg.jpg"

const Pizzaria = () => {
    const style = {
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
    }
    return (
        <section id="pizzaria" className="pizzaria" style={style}>
            <div className="w-full h-full flex justify-center items-center">Pizzaria Capão Grande</div>
        </section>
    )
}

export default Pizzaria
