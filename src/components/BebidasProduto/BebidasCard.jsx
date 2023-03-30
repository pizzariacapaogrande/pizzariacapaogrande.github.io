import React, { useState } from 'react'
import Image from 'next/image'

const BebidasCard = ({ title, preco }) => {
    return (
        <article className="bebidas-card">
            <div>
                <p>{title} :</p>
                <span className="w-auto self-end">{preco}</span>
            </div>
        </article>
    )
}

export default BebidasCard
