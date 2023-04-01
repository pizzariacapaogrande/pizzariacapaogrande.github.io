import React, { useState } from 'react'
import PizzaProduto from './PizzaProduto/PizzaProduto'
import BebidasProduto from './BebidasProduto/BebidasProduto'
import VinhoProduto from './VinhoProduto/VinhoProduto'

const CardapioCard = () => {
    const [tipo, setTipo] = useState(1)

    function handleOptionChange(event) {
        setTipo(event.target.value);
    }
    return (
        <section className="cardapio-card">
            <div className="cardapio-select">
                <select name="tipo" onChange={handleOptionChange}>
                    <option value={1}>Pizzas</option>
                    <option value={2}>Bebidas</option>
                    <option value={3}>Vinhos</option>
                </select>
            </div>
            {tipo == 1 ? <PizzaProduto /> : null}
            {tipo == 2 ? <BebidasProduto /> : null}
            {tipo == 3 ? <VinhoProduto /> : null}
        </section>
    )
}

export default CardapioCard
