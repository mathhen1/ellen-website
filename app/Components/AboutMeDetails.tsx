const Formacao = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-3 w-screen gap-2">
            <h1 className="text-xl text-fuchsia-800 font-extrabold tracking-wide">
                Formação e Conhecimentos
            </h1>

            <ul className="text-center mt-4 m-3 p-3 flex flex-col gap-3 bg-fuchsia-400 rounded-lg
            tracking-wide font-bold outline-2 outline-fuchsia-700">
                <li className="">
                    2015 - Curso Tecnico em Computação, Adobe Photoshop e Design Gráfico
                </li>

                <li>
                    2021 - Conclusão do Ensino Medio
                </li>

                <li>
                    2022 - Socorrista (APH e SBV)
                </li>
            </ul>

            {/* Infos */}

            <h1 className="text-xl font-black tracking-wider text-fuchsia-800 border-b-2 mt-1 mb-2">
                Infos
            </h1>

            {/* Card Disponibilidade */}

            <div className="w-11/12 bg-fuchsia-400 text-center flex flex-col justify-center items-center p-2 
            rounded-md gap-3 outline-2 outline-fuchsia-700">

                <h1 className="pt-3 font-black tracking-wide text-fuchsia-800">Disponibilidade</h1>

                <h2 className="text-fuchsia-900 text-sm font-semibold w-10/12">
                    Estou disponivel para garantir que sua marca seja muito bem representada, não importa o momento.
                </h2>

                <h2 className="text-fuchsia-900 text-sm font-semibold w-10/12">
                    Retratando sua marca com beleza e delicadeza
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
                                Campanhas de ultima hora
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

            <div className="w-11/12 bg-fuchsia-400 text-center flex flex-col justify-center items-center p-2 
            rounded-md gap-3 outline-2 outline-fuchsia-700">

                <h1>Sobre Mim</h1>

            </div>

            <div className="w-11/12 bg-fuchsia-400 text-center flex flex-col justify-center items-center p-2 
            rounded-md gap-3 outline-2 outline-fuchsia-700">

            </div>
        </div>
    )
}

export default Formacao