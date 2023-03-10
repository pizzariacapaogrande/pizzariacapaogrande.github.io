import react,{useContext} from "react"
import Navbar from "@/components/Navbar"
import Pizzaria from "@/components/Pizzaria"
import Cardapio from "@/components/Cardapio"
import Historia from "@/components/Historia"
import { MenuContext } from "@/contexts/MenuContext"
import MenuToggle from "@/components/MenuToggle"

export default function Home() {
    const { toggle, setToggle } = useContext(MenuContext)

    return (
        <main className="site">
            <Navbar />
            <Pizzaria />
            <Cardapio />
            <Historia />
            {toggle === true ? <MenuToggle /> : null}
        </main>
    )
}
