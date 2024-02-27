import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'
import Onboarding from './components/Onboarding'
import GameOver from './components/GameOver'
import './App.css'

function App() {

  const [difficulty, setDifficulty] = useState(3);
  const [cards, setCards] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');
  const apiKey = 'live_Nd86ZZRIvGLBSLXA8iiJKscdn6mjgRhbRh3BWed89B3IBB2vxSMW4cESRsggK0V8'

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

      const cardData = [{
            id: 12345,
            url: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
            name: 'Golden retreiver',
            clicked: false,
          }]

      setCards(cardData);
    }

    fetchData();
  }, [difficulty])

  useEffect( () => {
    function gameScreen() {
      
      switch (gameStatus) {
        case 'onboarding':
          console.log('onboarding');
          break;
        case 'playing':
          console.log('playing');
          break;
        case 'loss':
          console.log('loss');
          break;
        case 'win':
          console.log('win');
          break;
      }

    }
  }, [gameStatus])

  return (
    <div className='main-cont cont'>
      
      <div className="onboarding-cont cont" style={{display: gameStatus === 'onboarding' ? 'block' : 'none'}}>
        <Onboarding/>
      </div>

      <div className="gameover-cont cont" style={{display: gameStatus === 'loss' || gameStatus === 'win' ? 'block' : 'none'}}>
        <GameOver/>
      </div>

      <div className="game-cont cont" style={{display: gameStatus === 'playing' ? 'block' : 'none'}}>
        
        <h1 style={{fontSize: '35px'}}>Memory Card</h1>

        <div className="extra-info">
          <Scoreboard></Scoreboard>
          <Controls></Controls>
        </div>

        <GameBoard cards={cards} difficulty={difficulty} setGameStatus={setGameStatus}></GameBoard>

      </div>

    </div>
  )
}

export default App
