import { pizzasPreco, pizzas } from '@/content/Content'
import { bebidas } from "@/content/Content";
import { vinhos } from "@/content/Content";
import Image from 'next/image';

const CardapioDesk = () => {
    return (
        <section className="cardapio-desk">
            <article className="desk-article">
                <div className="desk-header">
                    <Image className="w-auto h-28 2xl:h-32" alt="logo" src="/img/folha-pizza.png" width={1024} height={1024} />
                    <h3>Pizzas</h3>
                </div>
                <div className="pizza-info">
                    <h4 className="pizza-info-title">Tamanhos:</h4>
                    {pizzasPreco.map((pizza, i) => (
                        <div key={i}>
                            <p className="!text-xl">{pizza.tamanho}:</p>
                            <span className="!text-xl">{pizza.preco}</span>
                        </div>
                    ))}
                </div>
                {pizzas.map((pizza) => {
                    return (
                        <div key={pizza.id} className="">
                            <div className="flex justify-start items-center mt-4">
                                <Image className="w-auto xl:h-20 2xl:h-24" alt="logo" src={pizza.image} width={1024} height={1024} />
                                <h3 className="!font-semibold !text-3xl md:!text-3xl 2xl:!text-4xl capitalize ml-6">{pizza.title}</h3>
                            </div>
                            <div className="desk-card-description">
                                {
                                    pizza.description?.map((p, i) => (
                                        <p className="!font-thin text-lg 2xl:text-xl" key={i}>{p.p}</p>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })}
            </article>
            <article className="desk-article">
                <div className="desk-header !items-center">
                    <Image className="w-auto h-28 2xl:h-40" alt="bebidas" src="/img/suco.png" width={1024} height={1024} />
                    <h3>Bebidas</h3>
                </div>
                <div className="pizza-info">
                    {
                        bebidas.map((bebida) => {
                            return (
                                <div className="desk-bebidas" key={bebida.id}>
                                    <p className="w-full !text-xl">{bebida.title} : <span className="w-full text-sm font-thin italic text-gray-600">{bebida.subtitle}</span></p>
                                    <span className="w-32 self-end">{bebida.preco}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
            <article className="desk-article">
                <div className="desk-header !items-center">
                    <Image className="w-auto h-28 2xl:h-32" alt="vinhos" src="/img/vinho2.png" width={1024} height={1024} />
                    <h3>Vinhos</h3>
                </div>
                <div className="pizza-info">
                    {
                        vinhos.map((vinho) => {
                            return (
                                <div key={vinho.id} className="bebidas-card">
                                    <div>
                                        <p className="font-semibold !text-xl">{vinho.title} : </p>
                                        <span className="w-24 self-end">{vinho.preco}</span>
                                    </div>
                                    {vinho.subtitle?.map((paragrafo, index) => {
                                        return (
                                            <span key={index} className="w-full !text-left text-sm font-thin italic text-gray-600">{paragrafo}</span>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    );
}

export default CardapioDesk;
