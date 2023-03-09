import React from 'react'

const CallAction = () => {
    return (
        <article className="call-action">
            <div>
                <h2 className="underline underline-offset-8 decoration-4 decoration-yellow-400">Pizzaria Integral</h2>
                <div className="text-body">
                    <p>
                        Estamos funcionando de quarta a domingo, ainda com a opção de&nbsp;
                        <span className="underline underline-offset-8 decoration-red-400">delivery e pizza congelada</span>
                    </p>
                </div>
                <div className="w-full h-full mt-6 flex flex-col justify-center items-start">
                    <h3 className="mb-4">Entre em contato:</h3>
                    <button className="btn-whatsapp">
                        <ion-icon id="whats-icon" name="logo-whatsapp"></ion-icon>
                        Whatsapp
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CallAction
