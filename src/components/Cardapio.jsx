import React, { useState, useEffect } from 'react'
import CardapioCard from './CardapioCard'
import BebidasCard from './BebidasCard'
import { pizzas, bebidas } from '@/content/Content'

const Cardapio = () => {
    const [pizza, setPizza] = useState(0)
    const [bebida, setBebida] = useState(0)

    const handleNextPizza = () => {
        const maxPizzas = pizzas.length - 1
        if (pizza === maxPizzas) {
            setPizza(0)
        } else {
            setPizza(pizza + 1)
        }
    }
    const handleBackPizza = () => {
        const maxPizzas = pizzas.length - 1
        if (pizza === 0) {
            setPizza(maxPizzas)
        } else {
            setPizza(pizza - 1)
        }
    }

    const handleNextBebida = (b) => {
        const maxBebidas = bebidas.length - 1
        if (bebida === maxBebidas) {
            setBebida(0)
        } else {
            setBebida(bebida + 1)
        }
    }
    const handleBackBebida = (b) => {
        const maxBebidas = bebidas.length - 1
        if (bebida === 0) {
            setBebida(maxBebidas)
        } else {
            setBebida(bebida - 1)
        }
    }

    return (
        <section id="cardapio" className="cardapio">
            <h2>Cardápios</h2>
            <CardapioCard />
            {/* <div className="card-wrapper">
                <CardapioCard
                    key={pizzas[pizza].id}
                    image={pizzas[pizza].image}
                    title={pizzas[pizza].title}
                    description={pizzas[pizza].description}
                    service={pizzas[pizza].service}
                />
                <div className="cardapio-btn-wrapper">
                    <button className="btn-cardapio" onClick={handleBackPizza}><ion-icon id="btn-card" name="chevron-back-outline"></ion-icon></button>
                    <button className="btn-cardapio" onClick={handleNextPizza}><ion-icon id="btn-card" name="chevron-forward-outline"></ion-icon></button>
                </div>
            </div> */}
        </section>
    )
}

export default Cardapio
