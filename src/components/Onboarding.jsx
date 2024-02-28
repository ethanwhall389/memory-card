import Button from "./Button"

export default function Onboarding({ setDifficulty, setGameStatus, gameStatus, setForceKey }) {
    
    function handleEasyClick() {
        setDifficulty(5);
        setForceKey(prevKey => prevKey+1);
        setGameStatus('playing');
    }
    function handleMediumClick() {
        setDifficulty(10);
        setForceKey(prevKey => prevKey+1);
        setGameStatus('playing');
    }
    function handleDifficultClick() {
        setDifficulty(15);
        setForceKey(prevKey => prevKey+1);
        setGameStatus('playing');
    }

    return (
        <div 
        className="onboarding-cont"
        style={{display: gameStatus === 'onboarding' ? 'flex' : 'none'}}
        >
            <h1 style={{fontSize: '38px'}}>Memory Cards</h1>
            <p>Try to select all of the cards without clicking the same card twice!</p>

            <div
            className="onboarding-info"
            >
                <p>Select a difficulty to begin:</p>
                <Button
                handleClick={handleEasyClick}
                bttnText={'Easy'}            
                />
                
                <Button
                handleClick={handleMediumClick}
                bttnText={'Medium'}            
                />
                
                <Button
                handleClick={handleDifficultClick}
                bttnText={'Difficult'}            
                />
            </div>
        </div>
    )
}