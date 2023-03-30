import BebidasCard from "./BebidasCard";
import { bebidas } from "@/content/Content";
import Image from 'next/image'

const BebidasProduto = () => {
    return (
        <section className="w-full h-full py-12 px-4">
            <div className="pizza-header flex items-center">
                <Image className="w-auto h-32" alt="bebidas" src="/img/suco.png" width={1024} height={1024} />
                <h3>Bebidas</h3>
            </div>
            {bebidas.map((bebida) => (
                <BebidasCard
                key={bebida.id}
                title={bebida.title}
                description={bebida.description}
                preco={bebida.preco}
                />
            ))}
        </section>
    );
}

export default BebidasProduto;
