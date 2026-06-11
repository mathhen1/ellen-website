const Experience = () => {

    const cardXp = "rounded-lg w-11/12 min-h-[70vh] h-full flex flex-col items-center justify-center bg-fuchsia-400 border-2 border-b-4 border-l-4 overflow-auto flex-shrink-0 snap-center snap-always gap-2 p-3 "
    const imageXp = "rounded-4xl object-cover w-10/12 h-80 border-3 border-r-5 border-b-5 border-black"

    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="reveal opacity-0 font-black text-fuchsia-800 tracking-wider text-xl border-b-2">
                Experiência
            </h1>

            <div className="reveal opacity-0 flex flex-row gap-3 
                overflow-x-auto h-full m-1 p-1 scrollbar-none 
                w-full snap-x snap-mandatory">

                <div className={cardXp}>

                    <img src="ellen-imperio2.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Cerveja Imperio
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de desgustação com impulsionamento de Vendas da Cerveja Imperio
                    </h2>
                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cerveja Império é uma grande marca brasileira de cerveja do tipo puro malte, pertencente à Cervejaria Cidade Imperial. É conhecida pelo seu ótimo custo-benefício e alta drinkability.
                    </p>

                </div>

                <div className={cardXp}>
                    <img src="ellen-imperio1.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Cerveja Imperio
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de desgustação com impulsionamento de Vendas da Cerveja Imperio
                    </h2>
                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cerveja Império é uma grande marca brasileira de cerveja do tipo puro malte, pertencente à Cervejaria Cidade Imperial. É conhecida pelo seu ótimo custo-benefício e alta drinkability.
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-bet.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Bet dá Sorte
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Promoção e Divulgação da Bet dá Sorte
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Bet Dá Sorte é uma plataforma brasileira de apostas online de quota fixa que opera no segmento de apostas esportivas. Regulamentada conforme as diretrizes da legislação nacional, a marca ganhou relevância no mercado nacional.
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-matuta1.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Cachaça Matuta
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Desgustação com direito a troca de brinde
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cachaça Matuta é uma premiada marca artesanal produzida no Engenho Vaca Brava, na Paraíba. Ela se destaca no mercado pelo alto padrão de qualidade e forte identidade nordestina.
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-matuta2.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Cachaça Matuta
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Desgustação com direito a troca de brinde
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cachaça Matuta é uma premiada marca artesanal produzida no Engenho Vaca Brava, na Paraíba. Ela se destaca no mercado pelo alto padrão de qualidade e forte identidade nordestina.
                    </p>
                </div>

            </div>

            <h1 className="reveal opacity-0 text-black tracking-wide w-10/12
            text-lg text-center font-black tracking-wider
            bg-clip-text text-transparent bg-gradient-to-r
            from-fuchsia-800 via-fuchsia-600 to-fuchsia-800
            border-black border-b-2 border-t-2 p-2 border-fuchsia-500">
                Retratando seu produto com beleza e delicadeza
            </h1>

            <div className="reveal opacity-0 w-11/12 bg-fuchsia-400 p-3 rounded-lg 
                flex flex-col items-center mb-1
                border-2 border-fuchsia-900 border-b-4">

                <h1 className="reveal opacity-0 text-lg font-black tracking-wider mb-2">
                    Com quem já trabalhei?
                </h1>

                <div className="reveal opacity-0 flex flex-row gap-5 w-full justify-center text-fuchsia-900 font-black">

                    <ul className="reveal opacity-0 text-sm tracking-wide text-start list-disc">
                        <li className="reveal opacity-0">
                            Cerveja Imperio
                        </li>
                        <li className="reveal opacity-0">
                            Bet dá Sorte
                        </li>
                        <li className="reveal opacity-0">
                            Agência Zazo
                        </li>
                        <li className="reveal opacity-0">
                            Tanqueray
                        </li>
                        <li className="reveal opacity-0">
                            Ketel One
                        </li>
                    </ul>

                    <ul className="reveal opacity-0 text-sm tracking-wide text-start list-disc">
                        <li className="reveal opacity-0">
                            Sport Club Recife
                        </li>
                        <li className="reveal opacity-0">
                            Grand Bares e Eventos
                        </li>

                        <li className="reveal opacity-0">
                            Cerveja Petra
                        </li>

                        <li className="reveal opacity-0">
                            Itaipava
                        </li>

                        <li className="reveal opacity-0">
                            Ótica Ratts
                        </li>
                    </ul>

                </div>
            </div>

            <h2 className="reveal opacity-0 w-11/12 text-center bg-fuchsia-400
            rounded-md font-black p-2 tracking-wider text-nowrap border-b-2 border-l-2 border-fuchsia-800">
                Estou aberta a novas oportunidades
            </h2>

            <div className="reveal opacity-0 w-11/12 text-center bg-gradient-to-r 
            from-fuchsia-500 via-fuchsia-400 to-fuchsia-500 p-2
            rounded-md">
                <h2 className="reveal opacity-0 text-black font-black tracking-wide text-white italic">
                    O que está esperando?
                </h2>
            </div>

            <h2 className="reveal opacity-0 w-11/12 text-center font-black
                p-2 border-black border-2 border-b-4 border-l-4 mb-3">
                Me contrate
            </h2>

            {/* <span className="reveal opacity-0 h-px w-10/12 border boder-black mb-3"></span> */}

        </div>
    )
}

export default Experience