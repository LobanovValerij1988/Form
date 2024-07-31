import Card from './Card'

export default function CardHolder({cards}) {
    return (
        <div className="flex flex-col gap-y-3 sm:justify-between sm:flex-row sm:gap-x-5">
            {cards.map((card)=>{
                return (<Card key={card.title} title={card.title} src={card.src}/>)
              })
            }
        </div>
    );
}
