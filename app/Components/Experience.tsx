const Experience = () => {

    const cardXp = "rounded-lg object-fit w-11/12 h-[60vh] flex flex-col items-center justify-start bg-fuchsia-400 border-2 border-b-4 border-l-4 overflow-auto flex-shrink-0 snap-center gap-2 p-3"
    const imageXp = "rounded-4xl object-fit w-10/12 h-60 border-3 border-r-5 border-b-5 border-black"

    return (
        <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="font-black text-fuchsia-800 tracking-wider text-xl border-b-2">
                Experiencia
            </h1>

            <div className="flex flex-row gap-3 
                overflow-x-auto h-full m-1 p-1 
                w-full snap-x snap-mandatory">

                <div className={cardXp}>
                    <img src="ellen-imperio1.jpg" className={imageXp} />

                    <h1>Oiiiiiiiiiiiiiiiii</h1>
                </div>

                <div className={cardXp}>

                    <img src="ellen-imperio2.jpg" className={imageXp} />

                </div>

                <div className={cardXp}>
                    <img src="ellen-bet.jpg" className={imageXp} />
                </div>

                <div className={cardXp}>
                    <img src="ellen-matuta1.jpg" className={imageXp} />
                </div>

                <div className={cardXp}>
                    <img src="ellen-matuta2.jpg" className={imageXp} />
                </div>

            </div>

        </div>
    )
}

export default Experience