import React, { useState, useEffect } from 'react'
import CardapioMobile from './CardapioMobile'
import CardapioDesk from './CardapioDesk'

const Cardapio = () => {
    return (
        <section id="cardapio" className="cardapio">
            <h2>Cardápios</h2>
            <CardapioMobile />
            <CardapioDesk />
        </section>
    )
}

export default Cardapio
