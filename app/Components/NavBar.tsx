import { Menu } from "lucide-react"
import { useState } from "react"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [menuIsOpening, setMenuIsOpening] = useState<boolean>(false)

    const showMenu = menuOpen ? "block" : "hidden"
    const animateMenuOpening = menuIsOpening ? "animate-slide-right" : "animate-slide-right-r"

    const handleMenu = () => {
        if (menuOpen === false) {
            setMenuIsOpening(true)
            setMenuOpen(true)
        }

        if (menuOpen === true) {
            setMenuIsOpening(false)
            setTimeout(() => {
                setMenuOpen(false)
            }, 800);
            
        }
    }

    return (
        <div className="animate-appears relative w-screen flex h-full">
            <div className={"w-screen flex flex-row font-roboto border-b-2 border-black p-2 bg-fuchsia-400 items-center"}>
                <h1 className="flex-1 text-2xl pl-5 font-black tracking-wider">
                    <a href="">Promotora Ellen</a>
                </h1>
                <Menu className="flex-none" onClick={handleMenu} />
            </div>
            <div className={"overflow-x-hidden absolute z-10 h-[102vh] w-full flex justify-end backdrop-blur " + showMenu}>
                <div className={"absolute h-full flex flex-col items-center bg-fuchsia-500 w-3/4 border-3 p-3 gap-3 " + animateMenuOpening}>
                    <Menu className="flex-none" onClick={handleMenu} />

                    <span className="h-px w-3/4 border border-fuchsia-700"></span>

                    <img src="ellen-nav.jpg" className="w-32 h-32 rounded-full object-cover" />

                    <div className="flex flex-col items-center gap-3 p-2">
                        <a href="#sobre-mim" onClick={handleMenu}>
                            Sobre Mim
                        </a>
                        <a href="#formacao" onClick={handleMenu}>
                            Formação e Habilidades
                        </a>
                        <a href="#infos" onClick={handleMenu}>
                            Informações Adicionais
                        </a>
                        <a href="#experiencia" onClick={handleMenu}>
                            Experiência
                        </a>
                        <a href="#social" onClick={handleMenu}>
                            Social
                        </a>
                    </div>

                    <span className="h-px w-3/4 border border-fuchsia-700"></span>

                    <img src="logo1.png" className="w-10/12 h-1/4" />
                </div>
            </div>
        </div>
    )
}

export default NavBar