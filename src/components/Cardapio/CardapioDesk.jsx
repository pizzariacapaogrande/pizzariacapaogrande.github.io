import { pizzasPreco, pizzas } from '@/content/Content'
import { bebidas } from "@/content/Content";
import { vinhos } from "@/content/Content";
import Image from 'next/image';

const CardapioDesk = () => {
    return (
        <section className="cardapio-desk">
            <article className="desk-article">
                <div className="pizza-header">
                    <Image className="pizza-title-image" alt="logo" src="/img/folha-pizza.png" width={1024} height={1024} />
                    <h3>Pizzas</h3>
                </div>
                <div className="pizza-info">
                    <h4 className="pizza-info-title">Tamanhos:</h4>
                    {pizzasPreco.map((pizza, i) => (
                        <div key={i}>
                            <p>{pizza.tamanho}:</p>
                            <span>{pizza.preco}</span>
                        </div>
                    ))}
                </div>
                {pizzas.map((pizza)=>{
                   return (
                        <div key={pizza.id} className="">
                            <div className="flex justify-start items-center mt-4">
                                <Image className="pizza-card-image" alt="logo" src={pizza.image} width={1024} height={1024} />
                                <h3 className="!font-semibold !text-3xl md:!text-4xl capitalize ml-6">{pizza.title}</h3>
                            </div>
                            <div className="desk-card-description">
                                {
                                    pizza.description?.map((p, i) => (
                                        <p className="!font-thin text-sm sm:text-xl" key={i}>{p.p}</p>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })}
            </article>
            <article className="desk-article">
                <div className="pizza-header !items-center">
                    <Image className="w-auto h-32" alt="bebidas" src="/img/suco.png" width={1024} height={1024} />
                    <h3>Bebidas</h3>
                </div>
                <div className="pizza-info">
                    {
                        bebidas.map((bebida)=>{
                            return(
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
                <div className="pizza-header !items-center">
                    <Image className="w-auto h-32" alt="vinhos" src="/img/vinho.png" width={1024} height={1024} />
                    <h3>Vinhos</h3>
                </div>
                <div className="pizza-info">
                    {
                        vinhos.map((vinho)=>{
                            return(
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
