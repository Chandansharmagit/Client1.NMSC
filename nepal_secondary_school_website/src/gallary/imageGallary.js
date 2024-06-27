import React, { useEffect, useState } from 'react';
import '../gallary/newImageGrid.css';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Accordian from '../component/new/footer';

export default function ImageGallary({ setProgress, mystyle }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/Imagegallary');
            setEvents(response.data.reverse());
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 1000);
    }, []);

    return (
        <>
            <Helmet>
                <title>Image Gallery - Nepal Model Secondary School</title>
                <meta name="description" content="Explore the latest image gallery of Nepal Model Secondary School. Discover our events, activities, and more." />
                <meta property="og:title" content="Image Gallery - Nepal Model Secondary School" />
                <meta property="og:description" content="Explore the latest image gallery of Nepal Model Secondary School. Discover our events, activities, and more." />
                <meta property="og:url" content="https://nepalmodelsecondaryschool.com/Image-gallary" />
                <link rel="canonical" href="https://nepalmodelsecondaryschool.com/Image-gallary" />
            </Helmet>

            <div className="mystyle">
                <div className="container line">
                    <h1 className="hq">Image Gallary NMSC</h1>
                </div>

                <div className="image-grid-container">
                    {events.map((event) => (
                        <div className="image-grid" key={event._id}>
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl}`} alt={`Image ${event._id}`} />
                        </div>
                    ))}
                </div>

                <Accordian />
            </div>
        </>
    );
}
