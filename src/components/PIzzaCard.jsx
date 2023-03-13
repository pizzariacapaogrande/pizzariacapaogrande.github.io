import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PIzzaCard = ({ title, image, description }) => {
    const [size, setSize] = useState(4)

    function handleOptionChange(event) {
        setSize(event.target.value);
    }
    return (
        <div className="relative">
            <h3 className="before:content-['*'] before:mr-4 capitalize py-2 list-disc">{title}</h3>
            <div className="card-description">
                <Image className="cardapio-card-image" alt="logo" src={image} width={1024} height={1024} />
                {
                    description?.map((p, i) => (
                        <p className="!text-lg" key={i}>{p.p}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default PIzzaCard
