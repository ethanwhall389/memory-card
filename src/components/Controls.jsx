import { useState } from "react";
import Button from "./Button";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";



export default function Controls({ setIsMuted, isMuted, mainMenu }) {
    
    function handleMuteClick() {
        isMuted ? setIsMuted(false) : setIsMuted(true);
    }
    
    return (
        <div className="controls-cont cont">
            <Button
            bttnText={'Main Menu'}
            handleClick={mainMenu}
            />
            
            <HiSpeakerWave
            className='clickable'
            style={{transform: 'scale(1.5)', display: isMuted ? 'none' : 'block'}}
            onClick={() => handleMuteClick()}
            />

            <HiSpeakerXMark
            className='clickable'
            style={{transform: 'scale(1.5)', display: !isMuted ? 'none' : 'block'}}
            onClick={() => handleMuteClick()}
            />
            <audio src="src/assets/audio/click.wav"></audio>
        </div>
    )
}