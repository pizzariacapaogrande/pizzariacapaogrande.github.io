import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className="nav-wrapper">
            <div className="nav-desk aline-desk">
                <Link className="nav-logo" href="/"><Image className="logo-image" alt="logo" src="/img/logo.png" width={800} height={800} /></Link>
                <ul className="nav-sections">
                    <li className={router.asPath == "/#pizzaria" || router.asPath == "/" ? "nav-link-houver" : "nav-link"}><Link href="#pizzaria">Home</Link></li>
                    <li className={router.asPath == "/#cardapio" ? "nav-link-houver" : "nav-link"}><Link href="#cardapio">Cardapio</Link></li>
                    <li className={router.asPath == "/#historia" ? "nav-link-houver" : "nav-link"}><Link href="#historia">Historia</Link></li>
                </ul>
                <ul className="nav-social">
                    <li><Link href=""><ion-icon name="logo-instagram"></ion-icon></Link></li>
                    <li><Link href=""><ion-icon name="mail-outline"></ion-icon></Link></li>
                </ul>
            </div>
            <div className="nav-mobile">
                Nav Mobile
            </div>
        </nav>
    )
}

export default Navbar
