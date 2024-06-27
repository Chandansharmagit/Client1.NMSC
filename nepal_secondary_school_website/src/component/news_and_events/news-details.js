import React from 'react'
import './news-event.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Accordian from '../new/footer'

export default function Newsdetails({ setProgress }) {


    const [events, setEvents] = useState([]);





    useEffect(() => {
        fetchEvents();
    }, [events]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/events_change');
            console.log('Response:', response.data); // Log response data
            setEvents(response.data);


        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 1000);
    }, [])
    return (
        <div>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <div className="image-box" key={index}>
                        <img key={event._id} src={`https://backend.nepalmodelsecondaryschool.com/${event.url}`} alt="" className='image-bx' />
                        <div className="text">
                            <p className="alltext">
                                {event.paragraph}
                            </p>

                        </div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}





            <br />
            <br />
            <br />
            <Accordian />
        </div>
    )
}
