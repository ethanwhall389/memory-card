import Card from "./Card"

export default function GameBoard({ cards, difficulty, setGameStatus, score, setScore }) {
    
    function checkForMatch(cardData) {
        if (cardData.clicked === true) {
            setGameStatus('loss');
            //player loses
        } else {
            cardData.clicked = true;
            setScore(score+=1);
            console.log('card has been clicked, click count is now: ' + score);
            //randomizeCards
            checkForWin();
        }
    }

    function checkForWin() {
        score === difficulty ?
            setGameStatus('win') : null;
    }
    
    return (
        <div className="gameboard-cont cont">
            {cards.map((dog) => (
                <Card key={dog.id} data={dog} handleClick={checkForMatch}/>
            ))}
        </div>
    )
}