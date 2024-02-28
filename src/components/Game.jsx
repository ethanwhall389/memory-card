import { useState } from "react";

import Scoreboard from "./Scoreboard"
import Controls from "./Controls"
import GameBoard from "./GameBoard"

export default function Game({ resetGame, score, setScore, highScore, cards, setCards, difficulty, setGameStatus }) {

    const [isMuted, setIsMuted] = useState(false);


    return (
        <>

        <audio 
        muted={isMuted}
        loop
        autoPlay src="src/assets/audio/jazz-music.mp3">
        </audio>

        <h1 className='main-heading'>Memory Cards</h1>

        <div className="extra-info">
          <Scoreboard score={score} highScore={highScore}></Scoreboard>
          <Controls
          setIsMuted={setIsMuted}
          isMuted={isMuted}
          mainMenu={resetGame}
          ></Controls>
        </div>

        <GameBoard 
        cards={cards}
        setCards={setCards}
        difficulty={difficulty}
        setGameStatus={setGameStatus}
        score={score}
        setScore={setScore}

        ></GameBoard>
    </>
    )
}