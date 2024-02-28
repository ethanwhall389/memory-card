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
            <h1 className="main-heading">Memory Cards</h1>
            <p>Try to select all of the cards without clicking the same card twice!</p>

            <img src="https://images.unsplash.com/photo-1594922009922-d1665ed9ce44?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A dog sitting happily on the beach"
            className="main-image"
            />
            
            <div
            className="onboarding-info"
            >
                <p>Select a difficulty to begin:</p>
                <div className="buttons-cont">
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
        </div>
    )
}