import { useEffect } from "react";
import Card from "./Card"

export default function GameBoard({ cards, setCards, difficulty, setGameStatus, score, setScore }) {
    
    function checkForMatch(cardData) {
        if (cardData.clicked === true) {
            setGameStatus('loss');
            //player loses
        } else {
            const newCards = cards.map((card) => {
                if (card.id === cardData.id) {
                    card.clicked = true;
                }
                return card;
            })
            setCards(newCards);

            score+=1;
            setScore(score);
            // randomizeCards();
            checkForWin();
        }
    }

    function checkForWin() {
        score === difficulty ?
            setGameStatus('win') : null;
    }

    useEffect(() => {
        function randomizeCards() {
    
            const newCards = [...cards];
            for (let i=newCards.length-1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * (i+1));
                let temp = newCards[i];
                newCards[i] = newCards[randomIndex];
                newCards[randomIndex] = temp;
            }
            setCards(newCards);
        }

        randomizeCards();
    }, [score])

    
    return (
        <div className="gameboard-cont cont">
            {cards.map((dog) => (
                <Card key={dog.id} data={dog} id={dog.id} handleClick={checkForMatch}/>
            ))}
        </div>
    )
}