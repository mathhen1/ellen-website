import { linkWpp } from "../Utils/links"

const AboutMe = () => {
    return (
        <div id="sobre-mim" className="flex flex-col items-center mt-5 gap-5">
            <h1 className="text-xl">Olá, sou <span className="text-fuchsia-800 font-black tracking-wide">Ellen Souza</span>
            </h1>

            <img src="ellen-main3.jpg" className="rounded-full object-fit w-2/3 h-2/3 border-2 border-fuchsia-500 animate-image" />

            <h2 className="mt-3 text-lg font-semibold tracking-wide">
                <span className="font-black">Promotora</span> e Supervisora de Eventos
            </h2>

            <h3 className="text-sm text-center">
                Forneço um trabalho <span className="underline underline-offset-3">profissional</span> e de qualidade para que tenhamos um excelente evento
            </h3>

            <div className="bg-fuchsia-400 rounded-sm p-3 w-11/12 text-nowrap">
                <h4 className="text-sm text-center font-semibold">
                    Estou disposta a atuar nos mais diversos cenários
                </h4>
            </div>

            <div className="bg-fuchsia-400 rounded-sm p-3 w-11/12 text-nowrap">
                <h4 className="text-sm text-center font-black tracking-wider">
                    <a href={linkWpp} target="_blank">
                        Basta me contatar!
                    </a>
                </h4>
            </div>
        </div>
    )
}

export default AboutMe