export default function Scoreboard({ score, highScore }) {
    return (
        <div className="scoreboard-cont cont">
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    )
}