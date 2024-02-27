export default function Scoreboard({ score }) {
    return (
        <div className="scoreboard-cont cont">
            <p>Score: {score}</p>
            <p>High Score: 10</p>
        </div>
    )
}