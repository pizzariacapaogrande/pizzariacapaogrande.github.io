import React, { useState } from 'react'
import Image from 'next/image'

const PizzaCard = ({ title, image, description }) => {
    const [size, setSize] = useState(4)

    function handleOptionChange(event) {
        setSize(event.target.value);
    }

    return (
        <article className="cardapio-card">
            <div className="card-header">
                <Image className="cardapio-card-image" alt="logo" src={image} width={1024} height={1024} />
                <div className="w-full h-full ml-2">
                    <h3 className="capitalize py-2">{title}</h3>
                    <div>
                        <span className="topic">tamanho:</span>
                        <select name="tamanho" onChange={handleOptionChange}>
                            <option value={4}>Pequena</option>
                            <option value={6}>Media</option>
                            <option value={8}>Grande</option>
                            <option value={12}>Família</option>
                        </select>
                    </div>
                    <div className="mt-2"><span className="topic">serve:</span>{size} pessoas</div>
                </div>
            </div>
            <div className="card-description">
                {
                    description?.map((p, i) => (
                        <p key={i}>{p.p}</p>
                    ))
                }
            </div>
        </article>
    )
}

export default PizzaCard
