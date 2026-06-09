import { Menu } from "lucide-react"
import { useState } from "react"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const showMenu = menuOpen ? "block" : "hidden"
    const animateMenuOpening = menuOpen ? "animate-slide-right" : "animate-slide-right-r"

    const closeBar = menuOpen ? "hidden" : "block"

    const handleMenu = () => {
        if (menuOpen === false) {
            setMenuOpen(true)
        }

        if (menuOpen === true) {
            setMenuOpen(false)
        }
    }

    return (
        <div className="relative w-screen flex">
            <div className={"w-screen sticky top-0 flex flex-row font-roboto border-b-2 border-fuchsia-600 p-2 bg-fuchsia-400"}>
                <h1 className="flex-1 text-2xl pl-5 font-bold tracking-wider">Ellen Souza</h1>
                <Menu className="flex-none" onClick={handleMenu} />
            </div>
            <div className={"absolute z-10 h-screen w-screen flex justify-end backdrop-blur "  + showMenu}>
                <div className={"h-screen flex flex-col items-center bg-fuchsia-400 w-3/4 border-3 p-3 gap-2 " + animateMenuOpening}>
                    <Menu className="flex-none" onClick={handleMenu} />
                    <a href="">Sobre Mim</a>
                    <a href="">Experiencias</a>
                    <a href="">Formação</a>

                </div>
            </div>
        </div>
    )
}

export default NavBar