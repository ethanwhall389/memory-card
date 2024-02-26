import Card from "./Card"

export default function GameBoard() {
    return (
        <div className="gameboard-cont cont">
            <Card
            image={'https://images.dog.ceo/breeds/lhasa/n02098413_4141.jpg'}
            />
            <Card></Card>
            <Card></Card>
        </div>
    )
}