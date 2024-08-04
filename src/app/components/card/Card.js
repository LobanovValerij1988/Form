'use client'

import {useState} from "react";

export default function Card({src, title, onCardClick, selected}) {
   const [isHovered, setHovered] = useState(false);
   const isSelectedCard = selected === title || isHovered ?  "custom-card-selected " : "";
    return (
        <button
                 onMouseEnter={()=>{setHovered(true)}}
                 onMouseLeave={()=>{setHovered(false)}}
                 onClick={(e)=> onCardClick(e)}
                 data-value={title}
                 className={`w-full  flex flex-row items-center h-[60px] rounded-[10px] border-style:solid border-2 border-neutral-50
                      bg-white shadow-[-3px_5px_40px_-7px_rgba(0,0,0,0.3)]  sm:h-[220px] sm:flex-col ${isSelectedCard}`}
        >
                <img
                        className="flex-initial h-[36px]  sm:flex-2 w-[108px] self-center custom-card-image sm:h-[108px] "
                        src = {src}
                        alt="done in percent"
                />
                   <label className="w-full flex-1 text-lg text-left  rounded-r-md  custom-card-bottom sm:rounded-b-md cursor-pointer sm:text-center"
                           htmlFor={title}
                    >
                   <span className={"custom-card-subscription  ml-3"}> {title} </span>
                   </label>
        </button>
    );
}
