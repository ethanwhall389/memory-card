import Button from "./Button"

export default function Onboarding({ setDifficulty, setGameStatus }) {
    
    function handleEasyClick() {
        setDifficulty(3);
        setGameStatus('playing');
    }
    function handleMediumClick() {
        setDifficulty(8);
        setGameStatus('playing');
    }
    function handleDifficultClick() {
        setDifficulty(14);
        setGameStatus('playing');
    }

    return (
        <>
            <p>This is the onboarding screen!</p>
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
        </>
    )
}