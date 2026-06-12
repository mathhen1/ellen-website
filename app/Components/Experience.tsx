"use client"

import { useEffect, useRef, useState } from "react"

const Experience = () => {

    const cardXp = "rounded-lg w-11/12 min-h-[70vh] h-full flex flex-col items-center justify-center bg-fuchsia-300 border-2 border-b-4 border-l-4 overflow-auto flex-shrink-0 snap-center snap-always gap-2 p-3 "
    const imageXp = "rounded-4xl object-cover w-10/12 h-80 border-2 border-r-4 border-b-4 border-black"

    const [countXp, setCountXp] = useState<number>(0)
    const [countYearsXp, setCountYearsXp] = useState<number>(0)
    const interval = useRef<number | null>(null)
    const elRef = useRef<HTMLDivElement | null>(null)

    const handleCount = () => {
        setTimeout(() => {
            const intervalXp = window.setInterval(() => {
                setCountXp((countXp) => {
                    if (countXp >= 29) {
                        window.clearInterval(intervalXp)
                    }
                    return countXp + 1
                });
            }, 80)

            const intervalYears = window.setInterval(() => {
                setCountYearsXp((countYearsXp) => {
                    if (countYearsXp >= 4) {
                        window.clearInterval(intervalYears)
                    }
                    return countYearsXp + 1
                });
            }, 500)
        }, 400);
    }

    useEffect(() => {
        const element = elRef.current
        if (!element) return

        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (interval.current === null) {
                        handleCount()
                    }
                    obs.disconnect()
                }
            })
        })
        obs.observe(element)

        return () => {
            obs.unobserve(element)
            obs.disconnect()
        }

    }, [])

    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 id="experiencia" className="reveal opacity-0 font-black text-fuchsia-800 tracking-wider text-xl border-b-2">
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
                        Ação de Degustação
                    </h2>
                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cerveja Império é uma grande marca brasileira de cerveja do tipo puro malte, pertencente à Cervejaria Cidade Imperial
                    </p>

                </div>

                <div className={cardXp}>
                    <img src="ellen-imperio1.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Cerveja Imperio
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Degustação
                    </h2>
                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cerveja Império é uma grande marca brasileira de cerveja do tipo puro malte, pertencente à Cervejaria Cidade Imperial
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-bet.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Bet dá Sorte
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Promoção e Divulgação
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Bet Dá Sorte é uma plataforma brasileira de apostas online regulamentada de quota fixa que opera no segmento de apostas esportivas
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-matuta1.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Cachaça Matuta
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Degustação e troca de brinde
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Cachaça Matuta é uma premiada marca artesanal produzida no Engenho Vaca Brava. Se destaca pela identidade nordestina.
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-itaipava.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Itaipava
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Bar
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Itaipava é uma das cervejas mais populares do Brasil, produzida e distribuída pelo Grupo Petrópolis, a segunda maior cervejaria do país e a maior com capital 100% nacional
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-ketel.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Ketel One
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Bar
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Ketel One é uma vodka premium holandesa, produzida artesanalmente em pequenos lotes pela destilaria Nolet, uma empresa familiar com mais de 300 anos de história
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-tanqueray.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Tanqueray
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Bar
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        Tanqueray é um dos gins London Dry mais prestigiados e vendidos do mundo, famoso pela sua garrafa icônica e receita clássica, foi criada em 1830 em Londres
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-dubex.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Construtora Moura Dubex
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Panfletagem
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Moura Dubeux é a maior incorporadora e construtora da região do Nordeste, com mais de 40 anos de atuação e foco no mercado de médio e alto padrão
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-rioave.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Construtora Rio Ave
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Ação de Panfletagem
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        A Construtora Rio Ave, com mais de 5 décadas de história, é referência no mercado de imóveis de alto padrão e construções corporativas em Pernambuco
                    </p>
                </div>

                <div className={cardXp}>
                    <img src="ellen-sport.jpg" className={imageXp} />

                    <h1 className="text-lg text-fuchsia-900 font-extrabold tracking-wider">
                        Sport Club Recife
                    </h1>

                    <h2 className="w-10/12 text-center text-sm font-bold">
                        Organização de Portões
                    </h2>

                    <p className="text-xs font-semibold w-10/12 text-center">
                        O Sport Club do Recife, fundado em 1905, é um dos maiores e mais tradicionais clubes do futebol brasileiro, sendo também referencia no Nordeste
                    </p>
                </div>
            </div>

            {/* Card "Com quem já trabalhei?" */}

            <div className="relative reveal opacity-0 w-full p-3 
                flex flex-col items-center mb-1 bg-fuchsia-200">

                <span className="reveal opacity-0 absolute top-0 h-px w-full border"></span>

                <h1 className="reveal opacity-0 border-b pb-1 text-fuchsia-900 text-lg font-black tracking-wider mb-2">
                    Com quem já trabalhei?
                </h1>

                <div className="reveal opacity-0 flex flex-col gap-3 w-full items-center text-fuchsia-800 font-black bg-fuchsia-200 p-2">

                    <div className="reveal opacity-0 bg-fuchsia-100 rounded-sm
                        p-2 flex flex-col gap-2 w-full items-center
                        border-black border-2 border-b-3 border-l-3">

                        <h1 className="text-base">Marcas de Bebidas</h1>

                        <ul className="font-medium list-disc text-sm tracking-wide text-start">
                            <li className="reveal opacity-0">
                                Cerveja Imperio
                            </li>
                            <li className="reveal opacity-0">
                                Tanqueray
                            </li>
                            <li className="reveal opacity-0">
                                Ketel One
                            </li>

                            <li className="reveal opacity-0">
                                Itaipava
                            </li>
                            <li className="reveal opacity-0">
                                Cerveja Petra
                            </li>
                        </ul>
                    </div>

                    <div className="reveal opacity-0 bg-fuchsia-100 rounded-sm
                        p-2 flex flex-col gap-2 w-full items-center
                        border-black border-2 border-b-3 border-l-3">

                        <h1 className="text-base">Clubes de Pernambuco</h1>

                        <ul className="font-medium list-disc text-sm text-start trackind-wide">
                            <li className="reveal opacity-0">
                                Sport Club Recife
                            </li>
                            <li className="reveal opacity-0">
                                Grand Bares &#40;Nautico&#41;
                            </li>
                        </ul>
                    </div>

                    <div className="reveal opacity-0 bg-fuchsia-100 rounded-sm
                        p-2 flex flex-col gap-2 w-full items-center
                        border-black border-2 border-b-3 border-l-3">
                        <h1 className="text-base">Construtoras de Pernambuco</h1>

                        <ul className="font-medium list-disc text-sm text-start trackind-wide">
                            <li className="reveal opacity-0">
                                Pernambuco Construtora
                            </li>
                            <li className="reveal opacity-0">
                                Rio Ave Construtora
                            </li>
                            <li className="reveal opacity-0">
                                Moura Dubex Construtora
                            </li>
                            <li className="reveal opacity-0">
                                Gabriel Bacelar
                            </li>
                        </ul>
                    </div>

                    <div className="reveal opacity-0 bg-fuchsia-100 rounded-sm
                        p-2 flex flex-col gap-2 w-full items-center
                        border-black border-2 border-b-3 border-l-3">

                        <h1 className="text-base">
                            Gerais
                        </h1>

                        <ul className="font-medium list-disc text-sm text-start trackind-wide">
                            <li className="reveal opacity-0">
                                Bet dá Sorte
                            </li>
                            <li className="reveal opacity-0">
                                Agência Zazo
                            </li>

                            <li className="reveal opacity-0">
                                UniNassau
                            </li>
                            <li className="reveal opacity-0">
                                Ótica Ratts
                            </li>
                            <li className="reveal opacity-0">
                                Shopping Tacaruna
                            </li>
                        </ul>
                    </div>

                </div>

                <span className="absolute bottom-0 h-px w-full border"></span>
            </div>

            <h2 className="reveal opacity-0 w-11/12 text-center bg-fuchsia-300
            rounded-md font-black p-2 tracking-wider text-nowrap border-b-2 border-l-2 border-fuchsia-800">
                Estou aberta a novas oportunidades
            </h2>

            <div className="reveal opacity-0 w-11/12 text-center bg-gradient-to-r 
            from-fuchsia-600 via-fuchsia-500 to-fuchsia-600 p-2
            rounded-md">
                <h2 className="reveal opacity-0 text-black font-black tracking-wide text-white italic">
                    O que está esperando?
                </h2>
            </div>

            <h2 className="reveal opacity-0 w-11/12 text-center font-black
                p-2 border-black border-2 border-b-4 border-l-4 mb-3">
                Me contrate
            </h2>

            <h1 className="reveal opacity-0 text-black tracking-wide w-10/12
            text-lg text-center font-black tracking-wider
            bg-clip-text text-transparent bg-gradient-to-r
            from-fuchsia-800 via-fuchsia-600 to-fuchsia-800
            border-black border-b-2 border-t-2 p-2 border-fuchsia-500">
                Sempre retratando seu produto com beleza e delicadeza
            </h1>

            <div className="reveal opacity-0 w-10/12 flex flex-col items-center text-fuchsia-400 font-black tracking-widest">
                <h1 ref={elRef} className="reveal opacity-0 text-5xl text-fuchsia-800">
                    {countXp}<span className="reveal opacity-0 text-fuchsia-700 font-normal">+</span>
                </h1>
                <h2 className="reveal opacity-0 text-base">
                    Jobs concluídos
                </h2>
            </div>

            <div className="reveal opacity-0 w-10/12 flex flex-col items-center text-fuchsia-400 font-black tracking-widest mb-3">
                <h1 ref={elRef} className="reveal opacity-0 text-5xl text-fuchsia-800">
                    {countYearsXp}<span className="reveal opacity-0 text-fuchsia-700 font-normal">+</span>
                </h1>
                <h2 className="reveal opacity-0 text-base">
                    Anos de Experiência
                </h2>
            </div>

        </div>
    )
}

export default Experience