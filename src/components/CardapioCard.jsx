import React, { useState } from 'react'
import PizzaProduto from './PizzaProduto/PizzaProduto'
import BebidasProduto from './BebidasProduto/BebidasProduto'

const CardapioCard = () => {
    const [tipo, setTipo] = useState(1)

    function handleOptionChange(event) {
        setTipo(event.target.value);
    }
    return (
        <section className="cardapio-card">
            <article className="cadapio-form">
                <div className="cardapio-select">
                    <select name="tipo" onChange={handleOptionChange}>
                        <option value={1}>Pizzas</option>
                        <option value={2}>Bebidas</option>
                        <option value={3}>Vinhos</option>
                    </select>
                </div>
            </article>
            {tipo == 1 ? <PizzaProduto /> : null}
            {tipo == 2 ? <BebidasProduto /> : null}
        </section>
    )
}

export default CardapioCard
