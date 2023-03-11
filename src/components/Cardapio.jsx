import React, { useState, useEffect } from 'react'
import PizzaCard from './PizzaCard'
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
            <h2 className="w-full sm:w-1/2 mb-12 !text-4xl font-bold decorate-title-2">Cardápio</h2>
            <div className="card-wrapper">
                <PizzaCard
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
            </div>
            <div className="card-wrapper">
                <BebidasCard
                    key={bebidas[bebida].id}
                    image={bebidas[bebida].image}
                    title={bebidas[bebida].title}
                    description={bebidas[bebida].description}
                    service={bebidas[bebida].service}
                />
                <div className="cardapio-btn-wrapper">
                    <button className="btn-cardapio" onClick={handleBackBebida}><ion-icon id="btn-card" name="chevron-back-outline"></ion-icon></button>
                    <button className="btn-cardapio" onClick={handleNextBebida}><ion-icon id="btn-card" name="chevron-forward-outline"></ion-icon></button>
                </div>
            </div>
        </section>
    )
}

export default Cardapio
