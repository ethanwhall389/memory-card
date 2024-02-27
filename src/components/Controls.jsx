import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

export default function Controls() {
    return (
        <div className="controls-cont cont">
            <span className="clickable">Main Menu</span>
            <HiSpeakerWave className='clickable' style={{transform: 'scale(1.5)'}}/>
        </div>
    )
}