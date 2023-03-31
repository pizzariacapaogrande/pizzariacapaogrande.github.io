import React, { useState } from 'react'
import Image from 'next/image'

const BebidasCard = ({ title, subtitle, preco }) => {
    return (
        <article className="bebidas-card">
            <div>
                <p>{title} : <span className="w-full text-sm font-thin italic text-gray-600">{subtitle}</span></p>
                <span className="w-24 self-end">{preco}</span>
            </div>
        </article>
    )
}

export default BebidasCard
