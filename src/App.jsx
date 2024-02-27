import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'
import './App.css'

function App() {

  const [difficulty, setDifficulty] = useState(3);
  const [cards, setCards] = useState([]);
  const [gameStatus, setGameStatus] = useState('onboarding');
  const apiKey = 'live_Nd86ZZRIvGLBSLXA8iiJKscdn6mjgRhbRh3BWed89B3IBB2vxSMW4cESRsggK0V8'

  useEffect(() => {
    async function fetchData() {
      
      setCards(Array.from({length: difficulty}, () => ({message: 'Loading...'})));
      const response = await fetch(`https://api.thedogapi.com/v1/images/search?&api_key=${apiKey}&has_breeds=1&limit=${difficulty}`);
      const data = await response.json();

      const cardData = data.map((dogElement) => {
        return {
          id: dogElement.id,
          url: dogElement.url,
          name: dogElement.breeds[0].name,
        }
      })

      // console.log(cardData);

      setCards(cardData);
    }

    fetchData();
  }, [difficulty])

  return (
    <div className='main-cont cont'>
      
      <div className="onboarding-cont cont" style={{display: 'none'}}>
      </div>

      <div className="gameover-cont cont" style={{display: 'none'}}>
      </div>

      <div className="game-cont cont">
        
        <h1 style={{fontSize: '35px'}}>Memory Card</h1>

        <div className="extra-info">
          <Scoreboard></Scoreboard>
          <Controls></Controls>
        </div>

        <GameBoard cards={cards}></GameBoard>

      </div>

    </div>
  )
}

export default App
