import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CallAction = () => {
    return (
        <article className="call-action">
            <Image className="call-image" alt="logo" src="/img/logo.png" width={1024} height={1024} />
            {/* <div className="call-text">
                <p>
                    Estamos funcionando de quarta a domingo, ainda com a opção de&nbsp;
                    <span className="underline underline-offset-8 decoration-red-400">delivery e pizza congelada</span>
                </p>
            </div> */}
            <div className="w-full h-full mt-20 2xl:mt-40 flex flex-col justify-center items-start">
                <h3 className="mb-4">Contatos:</h3>
                <div className="w-full h-full flex items-center justify-start">
                    <Link className="btn-whatsapp" href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F557533441138&e=AT0Sdli2yhrvYyJ6_hz__nGuUo5cQ5JPifo_P67_BGEZ4d6jbtt2CDkSoEv8OGvoex4HpnJwSVEs72K3wUswnoWCWunrF4YhdMnSKg">
                        <ion-icon id="whats-icon" name="logo-whatsapp"></ion-icon>
                        Whatsapp
                    </Link>
                    <p className="btn-phone">
                        <ion-icon name="call-outline"></ion-icon>
                        <span className="ml-2 !text-lg">+55 75 3344-1138</span>
                    </p>
                </div>
            </div>
        </article>
    )
}

export default CallAction
