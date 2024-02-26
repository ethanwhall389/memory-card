import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'
import './App.css'

function App() {

  return (
    <div className='main-cont cont'>
      
      <div className="onboarding-cont cont" style={{display: 'none'}}>
      </div>

      <div className="gameover-cont cont" style={{display: 'none'}}>
      </div>

      <div className="game-cont cont">
        
        <h1>Memory Card</h1>

        <div className="extra-info">
          <Scoreboard></Scoreboard>
          <Controls></Controls>
        </div>

        <GameBoard></GameBoard>

      </div>

    </div>
  )
}

export default App
