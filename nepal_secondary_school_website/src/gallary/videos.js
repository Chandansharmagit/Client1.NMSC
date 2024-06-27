// src/VideoGallery.js
import React, { useEffect, useState } from 'react';
import './videos.css';
import videos from '../video_playback/new_event_video.mp4'
import axios from 'axios';
import Accordian from '../component/new/footer';
const VideoGallery = () => {

    const [videos, setVideos] = useState([]);


    useEffect(() => {
        fetchVideos();
    }, [])


    const fetchVideos = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/videos');
            setVideos(response.data.reverse());
        } catch (error) {
            console.log('error fetching videos')
        }
    }


    //getting the videos 


    return (
        <>


            <div className="container line">
                <h1 className='hq'>Video Gallary NMSC</h1>
            </div>

            <div className='main_div'>


                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <video controls className='vidoes'>
                            <source src={`https://backend.nepalmodelsecondaryschool.com/${video.videoUrl}`} type="video/mp4" />

                        </video>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                    </div>
                ))}
            </div>

            <Accordian />
        </>
    );
};

export default VideoGallery;
