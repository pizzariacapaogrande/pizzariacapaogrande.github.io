import React, { useState, useEffect } from 'react'
import PizzaCard from './PizzaCard'
import { pizzas } from '@/content/Content'

const Cardapio = () => {
    const [pizza, setPizza] = useState(0)

    const handleNext = () => {
        const maxPizzas = pizzas.length - 1
        if (pizza === maxPizzas) {
            setPizza(0)
        } else {
            setPizza(pizza + 1)
        }
    }
    const handleBack = () => {
        const maxPizzas = pizzas.length - 1
        if (pizza === 0) {
            setPizza(maxPizzas)
        } else {
            setPizza(pizza - 1)
        }
    }

    return (
        <section id="cardapio" className="cardapio">
            <h2 className="decorate-title-2">Cardápio</h2>
            <div className="card-wrapper">
                <PizzaCard
                    key={pizzas[pizza].id}
                    image={pizzas[pizza].image}
                    title={pizzas[pizza].title}
                    description={pizzas[pizza].description}
                    service={pizzas[pizza].service}
                />
                <div className="w-full h-full">
                    <button className="w-1/2 h-12 mt-2" onClick={handleBack}><ion-icon id="btn-card" name="chevron-back-outline"></ion-icon></button>
                    <button className="w-1/2 h-12 mt-2" onClick={handleNext}><ion-icon id="btn-card" name="chevron-forward-outline"></ion-icon></button>
                </div>
            </div>
        </section>
    )
}

export default Cardapio
