const AboutMeDetails = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-3 w-screen gap-3">

            {/* Habilidades */}

            <div className="flex flex-col gap-3 items-center w-11/12 sm:w-1/2">
                <h1 id="skills" className="reveal opacity-0 text-fuchsia-800 font-black text-xl border-b p-1">
                    Habilidades
                </h1>

                <div className="flex flex-col gap-3 items-center w-full
                lg:grid lg:grid-cols-[repeat(3,max-content)] lg:text-nowrap lg:justify-center">

                    <h2 className="reveal opacity-0 border-2 border-fuchsia-700
                    rounded-xl p-2 w-full text-center tracking-widest 
                    bg-fuchsia-800 text-white font-black text-sm sm:w-4/5 lg:w-full">
                        Adobe Photoshop
                    </h2>

                    <h2 className="reveal opacity-0 border-2 border-fuchsia-700
                    rounded-xl p-2 w-full text-center tracking-widest 
                    bg-fuchsia-800 text-white font-black text-sm sm:w-4/5 lg:w-full">
                        Marketing Digital
                    </h2>

                    <h2 className="reveal opacity-0 border-2 border-fuchsia-700
                    rounded-xl p-2 w-full text-center tracking-widest 
                    bg-fuchsia-800 text-white font-black text-sm sm:w-4/5 lg:w-full">
                        Design Gráfico
                    </h2>
                </div>

                <div className="reveal opacity-0 flex flex-col items-center w-full 
                    bg-fuchsia-200 lg:bg-fuchsia-300 border-2 rounded-md p-2 text-fuchsia-700 mt-2">

                    <h2 className="reveal opacity-0 text-lg font-black tracking-wider">Habilidades Extras</h2>

                    <div className="flex flex-col items-center gap-2 justify-center p-1">
                        <h3 className="text-sm font-extrabold">Conhecimentos na Area da Saúde</h3>

                        <div className="reveal opacity-0 text-xs grid grid-cols-[repeat(5,max-content)] gap-2">
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Socorrista</p>
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Cuidadora</p>
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Aferir</p>
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Curativos</p>
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">RCP</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 justify-center p-1">
                        <h3 className="text-sm font-extrabold">Ramo Digital</h3>

                        <div className="text-xs grid grid-cols-[repeat(3,max-content)] gap-2">
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Social Media</p>
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Design</p>
                            <p className="reveal opacity-0 rounded-sm border p-1 bg-fuchsia-100">Edição de Vídeo</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Infos */}

            <h1 id="infos" className="reveal opacity-0 text-xl font-black tracking-wider text-fuchsia-900 border-b-2">
                Infos
            </h1>

            {/* Card Disponibilidade */}

            <div className="reveal opacity-0 w-11/12 sm:w-2/3 lg:w-1/2 bg-fuchsia-200 lg:bg-fuchsia-300 text-center flex flex-col justify-center items-center p-2 rounded-md gap-3 outline-2 outline-fuchsia-700">

                <h1 className="pt-3 font-black tracking-wide text-fuchsia-900">Disponibilidade</h1>

                <h2 className="text-fuchsia-900 text-sm font-semibold w-10/12">
                    Estou disponivel para garantir que sua marca seja muito bem representada, não importa o momento
                </h2>

                <ul className="text-start flex flex-col items-start gap-1">
                    <li>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/green-check-mark-icon.png"
                                alt="" className="w-4 h-4" />
                            <p className="text-xs text-fuchsia-900 font-semibold tracking-wide">
                                Disposta para agendas dinâmicas
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/green-check-mark-icon.png"
                                alt="" className="w-4 h-4" />
                            <p className="text-xs text-fuchsia-900 font-semibold tracking-wide">
                                Pontualidade e Carisma
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/green-check-mark-icon.png"
                                alt="" className="w-4 h-4" />
                            <p className="text-xs text-fuchsia-900 font-semibold tracking-wide">
                                Campanhas de última hora
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/green-check-mark-icon.png"
                                alt="" className="w-4 h-4" />
                            <p className="text-xs text-fuchsia-900 font-semibold tracking-wide">
                                Disponibilidade total de horarios
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Card Pessoal */}

            <div className="reveal opacity-0 w-11/12 sm:w-2/3 lg:w-1/2 bg-fuchsia-200 lg:bg-fuchsia-300 text-center flex flex-col justify-center items-center p-2 rounded-md gap-3 border-2 border-fuchsia-700">

                <h1 className="text-fuchsia-900 font-black tracking-wider">
                    Sobre Mim
                </h1>

                <ul className="list-disc flex flex-col gap-1 items-start text-sm text-fuchsia-900 font-semibold">
                    <li>
                        <h2>Meu nome é Ellen Souza</h2>
                    </li>
                    <li>
                        <h2>Tenho 1,60m de altura</h2>
                    </li>
                    <li>
                        <h2>Sou de Olinda-PE</h2>
                    </li>
                </ul>

                <span className="h-px w-8/10 border"></span>

                <div className="flex flex-col text-sm mb-2 rounded-md w-10/12 
                    text-black tracking-widest font-bold">

                    <table className="border-collapse bg-fuchsia-100 text-fuchsia-900">
                        <caption className="text-base mb-2 font-black">Manequim</caption>
                        <thead>
                            <tr>
                                <th className="border-2 border-fuchsia-500 p-1 font-extrabold">Calça</th>
                                <th className="border-2 border-fuchsia-500 p-1 font-extrabold">Blusa</th>
                                <th className="border-2 border-fuchsia-500 p-1 font-extrabold">Sapato</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 border-fuchsia-500 p-1">36</td>
                                <td className="border-2 border-fuchsia-500 p-1">P ou PP</td>
                                <td className="border-2 border-fuchsia-500 p-1">34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <span className="reveal opacity-0 h-px w-10/12 border border-fuchsia-800 mb-4"></span>

        </div>
    )
}

export default AboutMeDetails