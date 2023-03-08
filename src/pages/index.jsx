import Navbar from "@/components/Navbar"
import Pizzaria from "@/components/Pizzaria"
import Cardapio from "@/components/Cardapio"

export default function Home() {
    return (
        <main className="site">
            <Navbar />
            <Pizzaria />
            <Cardapio />
        </main>
    )
}
