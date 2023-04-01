import react, { useContext }  from "react"
import { MenuContext } from "@/contexts/MenuContext"
import { useRouter } from 'next/router'
import Link from 'next/link'

const MenuToggle = () => {
    const { toggle, setToggle } = useContext(MenuContext)
    const router = useRouter()


    const handleToggle = () => {
        toggle === false ? setToggle(true) : setToggle(false)
    }

    return (
        <section className="menu-toggle">
           <div className="w-full flex flex-col items-end justify-end">
                <button className="btn-toggle-close" onClick={handleToggle}>
                    <ion-icon id="toggle-icon-close" name="close-outline"></ion-icon>
                </button>
            </div>
            <ul className="toggle-links">
                <li className={router.asPath == "/#pizzaria" || router.asPath == "/" ? "toggle-link-houver" : "toggle-link"}><Link className="text-2xl" onClick={handleToggle} href="#pizzaria">Home</Link></li>
                <li className={router.asPath == "/#cardapio" ? "toggle-link-houver" : "toggle-link"}><Link className="text-2xl" onClick={handleToggle} href="#cardapio">Cardapio</Link></li>
                <li className={router.asPath == "/#historia" ? "toggle-link-houver" : "toggle-link"}><Link className="text-2xl" onClick={handleToggle} href="#historia">Historia</Link></li>
            </ul>
        </section>
    )
}

export default MenuToggle
