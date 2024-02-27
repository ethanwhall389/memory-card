export default function GameOver({ status }) {
    return (
        <>
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
        </>
    )
}