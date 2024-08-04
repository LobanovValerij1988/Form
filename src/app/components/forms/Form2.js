import CardHolder from "@/app/components/forms/CardHolder";

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

export default function Form2({onBack, onSelectWindow, selectedWindow}) {
    return (
          <div
              className="pb-4 custom-form-paddings"
          >
                <p className="mt-5 mb-2 text-base sm:mt-5 text-pale sm:mb-2 sm:text-sm ">
                    Kostenloser Solarstrom-Check in einer Minute.
                </p>
                <p className="text-xl mb-4 sm:mb-5" >
                    Besitzt Ihr Haus Gauben oder Dachfenster?
                </p>
                <CardHolder cards={cards}  onCardClick={onSelectWindow} selected={selectedWindow}/>
                <button onClick={onBack} className="my-9 flex"  >
                    <img
                        className=" inline ml-4"
                        src='/svg/arrow.svg'
                        alt="back"
                    />
                    <span className="text-pale text-sm">   Zurük </span>
                </button>
         </div>
    );
}