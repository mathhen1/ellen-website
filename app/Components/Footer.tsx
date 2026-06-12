import * as link from "../Utils/links"

const Footer = () => {

    const date = new Date().getFullYear()
    const imagesFooter = "reveal opacity-0 w-10 h-10 border rounded-lg p-1"

    return (
        <div className="reveal opacity-0 w-screen relative flex flex-col items-center text-center
            bg-fuchsia-400 text-fuchsia-950 p-2 gap-3">

            <span className="reveal opacity-0 h-px top-0 absolute w-full border-t border-black"></span>

            <div className="flex flex-col lg:flex-row w-full">

                <div className="reveal opacity-0 flex flex-col items-start lg:items-center text-start sm:gap-2 w-full mt-2 max-lg:border-b p-1 pb-2">
                    <h1 className="reveal opacity-0 text-black text-base lg:text-lg font-black 
                    tracking-widest lg:tracking-none">
                        Links Rápidos
                    </h1>

                    <ul className="reveal opacity-0 text-base sm:text-sm pl-2 font-black tracking-widest
                    flex flex-col sm:flex-row gap-1 lg:grid lg:grid-cols-3 italic lg:tracking-none">
                        <li className="reveal opacity-0">
                            <a href="#sobre-mim">-&gt; Sobre mim</a>
                        </li>

                        <li className="reveal opacity-0">
                            <a href="#skills">-&gt; Habilidades</a>
                        </li>

                        <li className="reveal opacity-0">
                            <a href="#infos">-&gt; Informações</a>
                        </li>

                        <li className="reveal opacity-0">
                            <a href="#experiencia">-&gt; Experiência</a>
                        </li>

                        <li className="reveal opacity-0">
                            <a href="#social">-&gt; Social</a>
                        </li>
                    </ul>
                </div>

                <div className="reveal opacity-0 flex flex-col items-start lg:items-center text-start gap-1 sm:gap-3 w-full max-lg:border-b p-1 pb-2">
                    <h1 className="reveal opacity-0 text-base lg:text-lg font-black 
                    tracking-widest lg:tracking-none text-black">
                        Meus contatos
                    </h1>

                    <ul className="reveal opacity-0 text-sm sm:text-xs pl-2 font-black tracking-wider 
                    text-fuchsia-950 flex flex-col sm:flex-row gap-2 lg:grid lg:grid-cols-2">

                        <li className="reveal opacity-0 flex flex-row gap-1 font-semibold">

                            <img src={link.linkIconInstaBlack} className={imagesFooter} />
                            <div>
                                <p className="reveal opacity-0 text-xs">
                                    Instagram Profissional
                                </p>
                                <p className="reveal opacity-0 text-black italic">
                                    @promotoraellen
                                </p>
                            </div>
                        </li>

                        <li className="reveal opacity-0 flex flex-row gap-1 font-semibold">

                            <img src={link.linkIconInstaBlack} className={imagesFooter} />
                            <div>
                                <p className="reveal opacity-0 text-xs">
                                    Instagram Pessoal
                                </p>
                                <p className="reveal opacity-0 text-black italic">
                                    @ellensoz_
                                </p>
                            </div>
                        </li>

                        <li className="reveal opacity-0 flex flex-row gap-1 font-semibold">
                            <img src={link.linkIconTelBlack} className={imagesFooter} />
                            <div>
                                <p className="reveal opacity-0 text-xs">
                                    Telefone
                                </p>
                                <p className="reveal opacity-0 text-black italic">
                                    81 9 8543-2334
                                </p>
                            </div>
                        </li>

                        <li className="reveal opacity-0 flex flex-row gap-1 font-semibold">
                            <img src={link.linkIconEmailBlack} className={imagesFooter} />
                            <div>
                                <p className="reveal opacity-0 text-xs">
                                    E-Mail
                                </p>
                                <p className="reveal opacity-0 text-black italic">
                                    ellensouza03@icloud.com
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>

            <div className="reveal opacity-0 flex w-full flex-col items-center gap-3">

                <p className="reveal opacity-0 text-sm sm:text-base text-black font-black tracking-widest">
                    Developed by Mathhen &lt;3
                </p>
                <p className="reveal opacity-0 text-xs sm:text-sm text-black font-black tracking-widest text-nowrap">
                    Copyright © {date}; Todos os direitos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer