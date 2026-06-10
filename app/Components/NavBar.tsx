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
        <div className="animate-appears relative w-screen flex h-full">
            <div className={"w-screen flex flex-row font-roboto border-b-2 border-fuchsia-600 p-2 bg-fuchsia-400 items-center"}>
                <h1 className="flex-1 text-2xl pl-5 font-bold tracking-wider">
                    <a href="">Promotora Ellen</a>
                </h1>
                <Menu className="flex-none" onClick={handleMenu} />
            </div>
            <div className={"overflow-x-hidden absolute z-10 h-screen w-full flex justify-end backdrop-blur " + showMenu}>
                <div className={"absolute h-full flex flex-col items-center bg-fuchsia-400 w-3/4 border-3 p-3 gap-2 " + animateMenuOpening}>
                    <Menu className="flex-none" onClick={handleMenu} />
                    <a href="#sobre-mim">Sobre Mim</a>
                    <a href="experiencia">Experiencia</a>
                    <a href="formacao">Formação</a>
                    <a href="contato">Contato</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar