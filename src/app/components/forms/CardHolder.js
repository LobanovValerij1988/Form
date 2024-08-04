import Card from '../card/Card'

export default function CardHolder(props) {
    return (
        <div className="flex  flex-col gap-y-3 sm:justify-between sm:flex-row sm:gap-x-5">
             { props.cards.map((card)=>{
                return (<Card key={card.title} src={card.src} title={card.title} {...props} />)
              })
             }
        </div>
    );
}
