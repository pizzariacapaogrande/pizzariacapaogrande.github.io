import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const VinhoCard = ({ title, subtitle, preco }) => {
    console.log(subtitle)
    return (
        <article className="bebidas-card">
            <div>
                <p className="font-semibold">{title} : </p>
                <span className="w-24 self-end">{preco}</span>
            </div>
            {subtitle?.map((vinho, index) => {
                return (
                    <span key={index} className="w-full ml-4 text-sm font-thin italic text-gray-600">{vinho}</span>
                )
            })}
        </article>
    )
}

export default VinhoCard
