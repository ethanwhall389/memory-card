import Card from "./Card"

export default function GameBoard({ cards, difficulty, setGameStatus }) {
    
    let clickCount = 0;
    
    function checkForMatch(cardData) {
        if (cardData.clicked === true) {
            //player loses
        } else {
            cardData.clicked = true;
            clickCount++;
            //randomizeCards
            //checkForWin
        }
    }

    function checkForWin() {
        clickCount === difficulty ?
            setGameStatus('win') : null;
    }
    
    return (
        <div className="gameboard-cont cont">
            {cards.map((dog) => (
                <Card key={dog.id} data={dog}/>
            ))}
        </div>
    )
}