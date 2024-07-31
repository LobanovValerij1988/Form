import CustomProgressBar from "./CustomProgressBar";
import CardHolder from "@/app/components/CardHolder";
import Link from "next/link";

const  cards = [
    {
        src: "/svg/well.svg",
        title: "Ja"
    },
    {
        src: "/svg/refusal.svg",
        title: "Nein"
    },
    {
        src: "/svg/different.svg",
        title: "Weiß nicht"
    }
]

export default function Form2() {
    return (
        <div className="w-full  bg-neutral-50 pt-3.5 pb-4 px-2.5  sm:px-10">
            <CustomProgressBar progress='50' fontColor="text-pale"/>
            <p className="mt-5 mb-2 text-base sm:mt-5 text-pale sm:mb-2 sm:text-sm ">
                Kostenloser Solarstrom-Check in einer Minute.
            </p>
            <p className="text-xl mb-4 sm:mb-5" >
                Besitzt Ihr Haus Gauben oder Dachfenster?
            </p>
            <CardHolder cards={cards}/>
            <Link  href="/" >
                <img
                    className="h-[22px] inline ml-4 my-9"
                    src='/svg/arrow.svg'
                    alt="back"
                />
                <span className="text-pale text-sm">   Zurük </span>
            </Link>
        </div>
    );
}