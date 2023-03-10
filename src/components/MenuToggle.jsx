import react, { useContext }  from "react"
import { MenuContext } from "@/contexts/MenuContext"

const MenuToggle = () => {
    const { toggle, setToggle } = useContext(MenuContext)

    const handleToggle = () => {
        toggle === false ? setToggle(true) : setToggle(false)
    }

    return (
        <section className="menu-toggle">
           <div className="w-full flex justify-end">
                <button className="btn-toggle-close" onClick={handleToggle}>
                    <ion-icon id="toggle-icon-close" name="close-outline"></ion-icon>
                </button>
            </div>
        </section>
    )
}

export default MenuToggle
