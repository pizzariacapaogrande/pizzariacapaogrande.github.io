import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MenuContext } from '@/contexts/MenuContext'

const Navbar = () => {
    const router = useRouter()
    const { toggle, setToggle } = useContext(MenuContext)

    const handleToggle = () => {
        toggle === false ? setToggle(true) : setToggle(false)
    }

    return (
        <nav className="nav-wrapper">
            <div className="nav-desk aline">
                <Link className="nav-logo" href="/"><Image className="logo-image" alt="logo" src="/img/logotipo.png" width={800} height={800} /></Link>
                <ul className="nav-sections">
                    <li className={router.asPath == "/#pizzaria" || router.asPath == "/" ? "nav-link-houver" : "nav-link"}><Link href="#pizzaria">Home</Link></li>
                    <li className={router.asPath == "/#cardapio" ? "nav-link-houver" : "nav-link"}><Link href="#cardapio">Cardapio</Link></li>
                    <li className={router.asPath == "/#historia" ? "nav-link-houver" : "nav-link"}><Link href="#historia">Historia</Link></li>
                </ul>
                <ul className="nav-social">
                    <li><Link href="https://www.instagram.com/pizzadocapaooriginal/"><ion-icon name="logo-instagram"></ion-icon></Link></li>
                    <li><Link href=""><ion-icon name="mail-outline"></ion-icon></Link></li>
                </ul>
            </div>
            <div className="nav-mobile aline">
                <Link className="nav-logo" href="/">
                    <Image className="logo-image" alt="logo" src="/img/logotipo.png" width={800} height={800} />
                </Link>
                <div className="w-full flex justify-end">
                    <button className="btn-toggle" onClick={handleToggle}>
                        <ion-icon id="toggle-icon" name="menu-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
