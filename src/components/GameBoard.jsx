import Card from "./Card"

export default function GameBoard({ cards }) {
    return (
        <div className="gameboard-cont cont">
            {cards.map((dog) => (
                <Card key={dog.id} data={dog}/>
            ))}
        </div>
    )
}