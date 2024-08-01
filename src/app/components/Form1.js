import CardHolder from "@/app/components/CardHolder";
import CustomProgressBar from "@/app/components/CustomProgressBar";

const  cards = [
    {
        src: "/svg/gableRoof.svg",
        title: "Satteldach"
    },
    {
        src: "/svg/flatRoof.svg",
        title: "Flachdach"
    },
    {
        src: "/svg/shedRoof.svg",
        title: "Pultdach"
    },
    {
        src: "/svg/different.svg",
        title: "Anderes"
    }
]


export default function Form1({onSelectRoof, selectedRoof}) {
    return (
              <div className="pb-4 custom-form-paddings">
                <p className="mt-5 mb-2 text-base sm:mt-5 text-pale sm:mb-2 sm:text-sm ">
                    Kostenloser Solarstrom-Check in einer Minute.
                </p>
                <p className="text-xl mb-4 sm:mb-5" >
                    Welche Dachform hat Ihr Haus?
                </p>
                <CardHolder cards = {cards}  onCardClick={onSelectRoof} selected={selectedRoof} />
              </div>
    );
}