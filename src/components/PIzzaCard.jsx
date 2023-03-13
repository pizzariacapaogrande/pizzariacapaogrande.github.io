import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PIzzaCard = ({ title, image, description }) => {
    const [size, setSize] = useState(4)

    function handleOptionChange(event) {
        setSize(event.target.value);
    }
    return (
        <div>
            <div className="card-header">
                <h3 className="capitalize py-2">{title}</h3>
                <Image className="cardapio-card-image" alt="logo" src={image} width={1024} height={1024} />
            </div>
            <div className="card-description">
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
