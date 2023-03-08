import Navbar from "@/components/Navbar"
import Pizzaria from "@/components/Pizzaria"
import Cardapio from "@/components/Cardapio"
import Historia from "@/components/Historia"

export default function Home() {
    return (
        <main className="site">
            <Navbar />
            <Pizzaria />
            <Cardapio />
            <Historia />
        </main>
    )
}
