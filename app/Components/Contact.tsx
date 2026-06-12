import { linkIconEmail, linkIconInsta, linkIconWpp, linkInsta, linkWpp } from "../Utils/links"

const Contact = () => {

    return (
        <div id="social" className="reveal opacity-0 relative flex flex-col w-screen items-center gap-3 bg-fuchsia-300 p-3">
            <span className="reveal opacity-0 absolute top-0 w-screen h-px border"></span>

            <h1 className="reveal opacity-0 text-lg lg:text-xl font-black text-fuchsia-900 tracking-widest text-center border-b-2 pb-1">
                Social
            </h1>

            <h2 className="reveal opacity-0 font-black text-fuchsia-800 tracking-wide text-nowrap">
                Me acompanhe em minhas redes sociais
            </h2>

            <div className="reveal opacity-0 w-11/12 sm:w-1/2 lg:w-1/3 bg-fuchsia-200 border-2 border-black
            flex justify-center items-center rounded-sm p-3 lg:p-5 gap-2
            text-fuchsia-800 font-extrabold text-xl">
                <img src={linkIconInsta} className="w-6 h-6" />
                <a href={linkInsta} target="_blank">Instagram</a>
            </div>

            <div className="reveal opacity-0 w-11/12 sm:w-1/2 lg:w-1/3 bg-fuchsia-200 border-2 border-black
            flex justify-center items-center rounded-sm p-3 lg:p-5 gap-2
            text-fuchsia-800 font-extrabold text-xl">
                <img src={linkIconWpp} className="w-6 h-6" />
                <a href={linkWpp} target="_blank">WhatsApp</a>
            </div>

            <div className="reveal opacity-0 w-11/12 sm:w-1/2 lg:w-1/3 bg-fuchsia-200 border-2 border-black
            flex justify-center items-center rounded-sm p-3 lg:p-5 gap-2
            text-fuchsia-800 font-extrabold text-xl">
                <img src={linkIconEmail} className="w-6 h-6" />
                <a href="">Email</a>
            </div>

            <img src="logo1.png" className="reveal opacity-0 w-1/2 h-1/2 sm:w-1/4 lg:w-1/6 mt-1 mb-1 brightness-0" />

            <span className="reveal opacity-0 h-px bottom-0 absolute w-full border-b border-black"></span>

        </div>
    )
}

export default Contact