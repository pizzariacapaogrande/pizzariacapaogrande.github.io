import BebidasCard from "./BebidasCard";
import { bebidas } from "@/content/Content";
import Image from 'next/image'

const BebidasProduto = () => {
    return (
        <section className="w-full h-full py-12 px-4">
            <div className="pizza-header flex items-center mb-6 border-b-2 border-skin-title">
                <Image className="w-auto h-32" alt="bebidas" src="/img/suco.png" width={1024} height={1024} />
                <h3>Bebidas</h3>
            </div>
            {bebidas.map((bebida) => (
                <BebidasCard
                    key={bebida.id}
                    title={bebida.title}
                    description={bebida.description}
                    preco={bebida.preco}
                    subtitle={bebida.subtitle}
                />
            ))}
            <div className=" py-6 text-sm font-light text-gray-500">
                <span className="font-semibold uppercase text-sm">obs.: </span>
                Os sucos são adoçados com mel.<br />Consulte nosso serviço para saber os sabores.
            </div>
        </section>
    );
}

export default BebidasProduto;
