import Scoreboard from "./Scoreboard"
import Button from "./Button"
export default function GameOver({ status, score, highScore, resetGame }) {
        
    return (
        <div className="gameover-cont">
            <Scoreboard
            score={score}
            highScore={highScore}
            />

            <div className="loss"
            style={{display: status==='loss' ? 'flex' : 'none'}}
            >
                <h2 className="main-heading">You lost!</h2>
                <p>You clicked the same card twice.</p>
                <img
                src="https://media.istockphoto.com/id/98378798/photo/puppy-on-ottoman.jpg?s=612x612&w=0&k=20&c=rgbCy-GVeZto1VwErUHQ3pQxYtdr1Qnd_AxcQq_gZmE=" 
                alt="Sad puppy lying on a couch"
                className="main-image"
                />
            </div>

            <div className="win"
            style={{display: status==='win' ? 'flex' : 'none'}}
            >
                <h2 className="main-heading">You won!</h2>
                <p>You selected all the cards without clicking any twice!</p>
                <img
                src="https://www.harmonyanimalhospital.net/wp-content/uploads/2016/03/Happy-puppy-copy.jpeg"
                alt="Happy puppy running through field" 
                className="main-image"
                />

            </div>

            <Button
            bttnText={'Play again'}
            handleClick={resetGame}
            />
        </div>
    )
}