import { useRef, useState } from "react";
import "./video.css";

export default function Video({ videoUrl }) {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false);

    const handleStart = () => {
        if (!play) {
            videoRef.current.play();
            setPlay(true);
        } else {
            videoRef.current.pause();
            setPlay(false);
        }
    }

    return (
        <div className="video">
            <video 
                loop
                className="video__player"
                ref={ videoRef }
                onClick={ handleStart }
                src={ videoUrl }
            >
            </video>
        </div>
    );
}