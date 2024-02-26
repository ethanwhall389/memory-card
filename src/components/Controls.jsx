import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

export default function Controls() {
    return (
        <div className="controls-cont cont">
            <span>Main Menu</span>
            <HiSpeakerWave style={{transform: 'scale(1.5)'}}/>
        </div>
    )
}