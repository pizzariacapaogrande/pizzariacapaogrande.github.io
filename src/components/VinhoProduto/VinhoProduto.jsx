
import VinhoCard from "./VinhoCard";
import { vinhos } from "@/content/Content";
import Image from 'next/image'

const VinhoProduto = () => {
    return (
        <section className="w-full h-full py-12 px-4">
            <div className="pizza-header flex items-center mb-6 border-b-2 border-skin-title">
                <Image className="w-auto h-16" alt="vinhos" src="/img/vinho.png" width={1024} height={1024} />
                <h3>Vinhos</h3>
            </div>
            {vinhos.map((vinho) => (
                <VinhoCard
                    key={vinho.id}
                    title={vinho.title}
                    preco={vinho.preco}
                    subtitle={vinho.subtitle}
                />
            ))}
        </section>
    )
}

export default VinhoProduto
