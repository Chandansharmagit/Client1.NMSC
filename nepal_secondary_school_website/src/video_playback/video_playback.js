import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

import '../video_playback/videos.css'
import videos from '../video_playback/new_event_video.mp4'
export default function Video_playback() {

    //animating the web page while scrolling

    const animatedRef = useRef(null);



    //making the not copy of any text 
    const handlecopy = (event) => {
        event.preventDefault();
        alert("Copying is not allowed. This content is protected by copyright.")
    }


    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
            audioRef.current.pause(); // Pause the sound when video is paused
        } else {
            videoRef.current.play();
            audioRef.current.play(); // Play the sound when video is played
        }
        setIsPlaying(!isPlaying);
    };


    return (
        <div ref={animatedRef} className="animated-container">
            <audio ref={audioRef}>
                <source src={videos} type="audio/mpeg" />
            </audio>
            <div className='bdsss' onCopy={handlecopy}>
                <div className="row-preginations-videos">
                    <div className="col-preginations-videos">
                        <div className="detailing-of-videos">
                            <h2 className="experience">
                                The NMSC Experience
                            </h2>
                            <h4 className="ordinary">The extraordinary opportunities- <br />to explore, to collaborate and to challenge yourself.</h4>
                            <p className="text-preginatons">We believe in a transformative education experience to turn students <br /> curiosity and aspiration into a lasting social impact and continuous learning.</p>
                        </div>
                    </div>
                    <div className="col-preginations-videos">
                        <video src={videos} autoPlay loop muted className='videoss' ref={videoRef}></video>
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="45" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16" onClick={togglePlayPause} id='play'>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="45" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16" onClick={togglePlayPause} id='pause'>
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
