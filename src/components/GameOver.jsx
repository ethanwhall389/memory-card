import Scoreboard from "./Scoreboard"
export default function GameOver({ status, score, highScore, resetGame }) {
        
    return (
        <>
            <Scoreboard
            score={score}
            highScore={highScore}
            />

            <div className="loss"
            style={{display: status==='loss' ? 'block' : 'none'}}
            >
                <p>You lost!</p>
            </div>

            <div className="win"
            style={{display: status==='win' ? 'block' : 'none'}}
            >
                <p>You won!</p>
            </div>

            <button onClick={() => resetGame()}>Restart</button>
        </>
    )
}