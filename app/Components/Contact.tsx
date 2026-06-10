import { linkIconEmail, linkIconInsta, linkIconWpp } from "../Utils/links"

const Contact = () => {

    return (
        <div className="reveal opacity-0 relative flex flex-col w-screen items-center gap-3 bg-fuchsia-400 p-3">
            <span className="reveal opacity-0 absolute top-0 w-screen h-px border"></span>

            <h1 className="reveal opacity-0 text-lg font-black text-fuchsia-900 tracking-widest text-center border-b-2 pb-1">
                Social
            </h1>

            <h2 className="reveal opacity-0 font-black text-fuchsia-800 tracking-wide text-nowrap">
                Me acompanhe em minhas redes sociais
            </h2>

            <div className="reveal opacity-0 w-11/12 bg-fuchsia-300 border-2 border-black
            flex justify-center items-center rounded-sm p-3 gap-2
            text-fuchsia-800 font-extrabold text-xl">
                <img src={linkIconInsta} className="w-6 h-6" />
                <h1>Instagram</h1>
            </div>

            <div className="reveal opacity-0 w-11/12 bg-fuchsia-300 border-2 border-black
            flex justify-center items-center rounded-sm p-3 gap-2
            text-fuchsia-800 font-extrabold text-xl">
                <img src={linkIconWpp} className="w-6 h-6" />
                <h1>WhatsApp</h1>
            </div>

            <div className="reveal opacity-0 w-11/12 bg-fuchsia-300 border-2 border-black
            flex justify-center items-center rounded-sm p-3 gap-2
            text-fuchsia-800 font-extrabold text-xl">
                <img src={linkIconEmail} className="w-6 h-6" />
                <h1>Email</h1>
            </div>

            <img src="logo1.png" className="reveal opacity-0 w-1/2 h-1/2"/>
        </div>
    )
}

export default Contact