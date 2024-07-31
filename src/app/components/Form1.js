import CustomProgressBar from "./CustomProgressBar";
import CardHolder from "@/app/components/CardHolder";

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


export default function Form1() {
    return (
        <div className="w-full bg-neutral-50 pt-3.5 pb-4 px-2.5 sm:px-10">
            <CustomProgressBar progress='10' fontColor="text-pale"/>
            <p className="mt-5 mb-2 text-base sm:mt-5 text-pale sm:mb-2 sm:text-sm ">
                Kostenloser Solarstrom-Check in einer Minute.
            </p>
            <p className="text-xl mb-4 sm:mb-5" >
                Welche Dachform hat Ihr Haus?
            </p>
            <CardHolder cards = {cards} />
        </div>
    );
}