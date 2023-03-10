import react, { useContext, useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import Pizzaria from "@/components/Pizzaria"
import Cardapio from "@/components/Cardapio"
import Historia from "@/components/Historia"
import { MenuContext } from "@/contexts/MenuContext"
import MenuToggle from "@/components/MenuToggle"

export default function Home() {
    const { toggle, setToggle } = useContext(MenuContext)
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.pageYOffset);
    }

    const handleTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const watchScroll = () => window.addEventListener("scroll", handleScroll);
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <main className="site">
            {scroll === 0 ? <Navbar /> : null}
            <Pizzaria />
            <Cardapio />
            <Historia />
            {toggle === true ? <MenuToggle /> : null}
            {
                scroll > 0
                    ?
                    <button className="btn-go-top" onClick={handleTop}>
                        <ion-icon name="caret-up-outline"></ion-icon>
                    </button>
                    :
                    null
            }
        </main>
    )
}
