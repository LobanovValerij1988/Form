export default function Card({src, title}) {
    return (

        <button id="Satteldach" className='w-full items-center flex flex-row h-[60px] rounded-[10px]  bg-white shadow-[-3px_5px_40px_-7px_rgba(0,0,0,0.3)]
                                           sm:h-[220px] sm:flex-col '>
                <img
                        className="flex-initial h-[36px]  sm:flex-2 w-[108px] self-center sm:h-[108px]   "
                        src = {src}
                        alt="done in percent"
                />
                <label className="flex-1 text-lg text-left "
                       htmlFor="Satteldach"
                >
                    {title}
                </label>
        </button>
    );
}
