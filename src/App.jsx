import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'
import Onboarding from './components/Onboarding'
import GameOver from './components/GameOver'
import './App.css'

function App() {

  const [difficulty, setDifficulty] = useState(5);
  const [cards, setCards] = useState([]);
  const [gameStatus, setGameStatus] = useState('onboarding');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const apiKey = 'live_Nd86ZZRIvGLBSLXA8iiJKscdn6mjgRhbRh3BWed89B3IBB2vxSMW4cESRsggK0V8'
  const [isMuted, setIsMuted] = useState(false);

  // const clickAudio = new Audio('src/assets/audio/click.wav');
  // const jazzAudio = new Audio('src/assets/audio/jazz-music.mp3');

  // jazzAudio.play();

  function resetGame() {
    setGameStatus('onboarding');
    setScore(0);
  }

  useEffect(() => {
    score > highScore ? setHighScore(score) : null ;
  }, [gameStatus]);
  
  useEffect(() => {
    async function fetchData() {
      
      setCards(Array.from({length: difficulty}, () => ({message: 'Loading...'})));

      // const response = await fetch(`https://api.thedogapi.com/v1/images/search?&api_key=${apiKey}&has_breeds=1&limit=${difficulty}`);
      // const data = await response.json();

      // const cardData = data.map((dogElement) => {
      //   return {
      //     id: dogElement.id,
      //     url: dogElement.url,
      //     name: dogElement.breeds[0].name,
      //     clicked: false,
      //   }
      // })

      // console.log(cardData);

      // Dummy data \/
      const cardData = [
        {
          id: 'C3KfxN2DG',
          url: 'https://cdn2.thedogapi.com/images/C3KfxN2DG.jpg',
          name: 'Akbash Dog',
          clicked: false,
        },
        {
          id: 'Mn2A5Urz0',
          url: 'https://cdn2.thedogapi.com/images/Mn2A5Urz0.jpg',
          name: 'Bearded Collie',
          clicked: false,
        },
        {
          id: '8vgnFmYG8',
          url: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
          name: 'Chesapeake Bay Retriever',
          clicked: false,
        },
        {
          id: '8vgnFmYG81',
          url: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
          name: 'Chesapeake Bay Retriever',
          clicked: false,
        },
        {
          id: '8vgnFmYG82',
          url: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
          name: 'Chesapeake Bay Retriever',
          clicked: false,
        },
        {
          id: '8vgnFmYG83',
          url: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
          name: 'Chesapeake Bay Retriever',
          clicked: false,
        },
        {
          id: '8vgnFmYG84',
          url: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
          name: 'Chesapeake Bay Retriever',
          clicked: false,
        },
        {
          id: '8vgnFmYG85',
          url: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
          name: 'Chesapeake Bay Retriever',
          clicked: false,
        },


      ]
      //End of Dummy data

      setCards(cardData);
    }

    fetchData();
  }, [difficulty])

  return (
    <div className='main-cont cont'>
      
      <audio 
      muted={isMuted}
      loop
      autoPlay src="src/assets/audio/jazz-music.mp3"></audio>

        <Onboarding
        setDifficulty={setDifficulty}
        setGameStatus={setGameStatus}
        gameStatus={gameStatus}
        />


      <div className="gameover-cont cont" style={{display: gameStatus === 'loss' || gameStatus === 'win' ? 'block' : 'none'}}>
        <GameOver
        status={gameStatus}
        score={score}
        highScore={highScore}
        resetGame={resetGame}
        />
      </div>

      <div className="game-cont cont" style={{display: gameStatus === 'playing' ? 'block' : 'none'}}>
        
        <h1 style={{fontSize: '38px'}}>Memory Cards</h1>

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

      <footer className='footer'>
        <p>Music by <a href="https://pixabay.com/users/denis-pavlov-music-35636692/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=192585">Denis Pavlov</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=192585">Pixabay</a></p>
      </footer>
      
      </div>


    </div>
  )
}

export default App
