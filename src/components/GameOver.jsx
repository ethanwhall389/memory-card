import Scoreboard from "./Scoreboard"
import Button from "./Button"
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
                <h2 style={{fontSize: '25px'}}>You lost!</h2>
                <p>You clicked the same card twice.</p>
                <img src="https://media.istockphoto.com/id/98378798/photo/puppy-on-ottoman.jpg?s=612x612&w=0&k=20&c=rgbCy-GVeZto1VwErUHQ3pQxYtdr1Qnd_AxcQq_gZmE=" 
                alt="Sad puppy lying on a couch"
                style={{borderRadius: '20px', width:'550px'}}
                />
            </div>

            <div className="win"
            style={{display: status==='win' ? 'block' : 'none'}}
            >
                <h2 style={{fontSize: '25px'}}>You won!</h2>
                <p>You selected all the cards without clicking any twice!</p>
                <img src="https://www.harmonyanimalhospital.net/wp-content/uploads/2016/03/Happy-puppy-copy.jpeg"
                alt="Happy puppy running through field" 
                style={{borderRadius: '20px', width:'550px'}}
                />

            </div>

            <Button
            bttnText={'Play again'}
            handleClick={resetGame}
            />
        </>
    )
}