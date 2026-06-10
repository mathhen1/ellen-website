const Footer = () => {
    return (
        <div className="w-screen relative flex flex-col items-center bg-fuchsia-400 text-fuchsia-800 p-2 gap-3">
            <span className="h-px top-0 absolute w-full border border-fuchsia-900"></span>

            <h1 className="text-sm font-semibold tracking-widest">
                Links Rapidos
            </h1>

            <h1 className="text-sm font-semibold tracking-widest">
                Meus contatos
            </h1>

            <p className="text-xs text-black font-black tracking-widest">
                Developed by Mathen 
            </p>
        </div>
    )
}

export default Footer