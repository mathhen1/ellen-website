import { linkInsta, linkWpp } from "../Utils/links"

const AboutMe = () => {
    return (
        <div id="sobre-mim" className="flex flex-col lg:flex-row justify-center items-center mt-5 gap-4 lg:gap-2 lg:h-[90vh]">
            <div className="flex flex-col justify-center items-center mt-5 gap-4 lg:gap-5">

                <h1 className="text-xl reveal opacity-0 lg:text-2xl">
                    Olá, sou <span className="text-fuchsia-800 font-black tracking-wide">Ellen Souza</span>
                </h1>

                {/* <img src="ellen-main3.jpg" className="rounded-full object-fit w-2/3 h-2/3 border-2 border-fuchsia-500 animate-image" /> */}

                <div className="animate-appears w-2/3 h-2/3 sm:w-1/4 lg:hidden">
                    <img src="ellen-main3.jpg" className="border-2 border-fuchsia-500 rounded-full object-fit animate-image" />
                </div>

                <h2 className="reveal opacity-0 mt-3 text-lg lg:text-2xl w-10/12 font-semibold tracking-wide 
                text-nowrap lg:text-wrap text-center">
                    Promotora e Supervisora de <span className="text-fuchsia-700 font-extrabold">Eventos</span>
                </h2>

                <h3 className="reveal opacity-0 text-sm text-center w-10/12 font-semibold">
                    Forneço um trabalho <span className="underline underline-offset-3">profissional</span> e de qualidade para que tenhamos um excelente evento
                </h3>

                <div className="reveal opacity-0 bg-fuchsia-300 rounded-lg p-3 w-11/12 sm:w-1/2 lg:w-10/12 text-nowrap">
                    <h4 className="text-sm text-center font-semibold ">
                        Estou disposta a atuar nos mais diversos cenários
                    </h4>
                </div>

                <div className="reveal opacity-0 bg-fuchsia-300 border-b-3 
                border-2 border-fuchsia-900 rounded-lg p-3 
                w-11/12 sm:w-1/2 lg:w-10/12 text-nowrap">
                    <h4 className="text-fuchsia-800 text-sm text-center font-black tracking-widest">
                        <a href={linkWpp} target="_blank">
                            Entre em contato
                        </a>
                    </h4>
                </div>

                <div className="reveal opacity-0 mt-2 grid grid-cols-3 gap-5">
                    <a href={linkInsta} target="_blank">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png" alt="Instagram" className="w-10" />
                    </a>
                    <a href={linkWpp} target="_blank">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-color-icon.png" alt="WhatsApp" className="w-10" />
                    </a>
                    <a href="" target="_blank">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/red-mail-icon.png" alt="" className="w-10" />
                    </a>
                </div>

                <span className="reveal opacity-0 w-10/12 h-px border border-fochsia-500 block lg:hidden"></span>
            </div>

            <div className="hidden lg:flex flex-col items-center w-2/3">
                <div className="animate-appears w-2/4 h-2/4">
                    <img src="ellen-main3.jpg" className="border-2 border-fuchsia-500 rounded-full object-fill animate-image" />
                </div>
            </div>

            <span className="reveal opacity-0 w-10/12 h-px border-t border-fochsia-500 
                    hidden lg:block lg:absolute bottom-2"></span>

        </div>
    )
}

export default AboutMe