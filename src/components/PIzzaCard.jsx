import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PIzzaCard = ({ title, image, description }) => {
    const [size, setSize] = useState(4)

    function handleOptionChange(event) {
        setSize(event.target.value);
    }
    return (
        <div className="relative mt-6">
            <div className="pizza-card-header">
                <Image className="pizza-card-image" alt="logo" src={image} width={1024} height={1024} />
                <h3 className="ml-4 capitalize !font-semibold">{title}</h3>
            </div>
            <div className="pizza-card-description">
                {
                    description?.map((p, i) => (
                        <p className="!font-thin" key={i}>{p.p}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default PIzzaCard
