import React from 'react'
import Image from 'next/image';
import PIzzaCard from './PIzzaCard';
import { pizzasPreco, pizzas } from '@/content/Content'

const PizzaProduto = () => {
    return (
        <article className="pizza-produto">
            <div className="pizza-header">
                <Image className="pizza-title-image" alt="logo" src="/img/folha-pizza.png" width={1024} height={1024} />
                <h3>Pizzas</h3>
            </div>
            <div className="pizza-body">
                <div className="pizza-info">
                    <h4 className="pizza-info-title">Tamanhos:</h4>
                    {pizzasPreco.map((pizza, i) => (
                        <div key={i}>
                            <p>{pizza.tamanho}:</p>
                            <span>{pizza.preco}</span>
                        </div>
                    ))}
                </div>
                <h4 className="pizza-info-title">Sabores:</h4>
                {pizzas.map((pizza) => (
                    <PIzzaCard key={pizza.id} title={pizza.title} image={pizza.image} description={pizza.description} />
                ))}
            </div>
        </article>
    )
}

export default PizzaProduto
