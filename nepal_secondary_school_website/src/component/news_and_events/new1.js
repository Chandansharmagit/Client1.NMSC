import React, { useEffect, useState } from 'react'
import './news-event.css'
import axios from 'axios'
import Accordian from '../new/footer'
import ocem from '../images/ocem1.JPG'

export default function New1({ setProgress }) {

    const [events, setEvents] = useState([]);





    useEffect(() => {
        fetchEvents();
    }, [events]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/events_change');
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
            <div>
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div className="image-box">
                            <img key={event._id} src={event.imageUrl1}  alt="" className='image-bx' />
                            <div className="text">
                                <p className="alltext">
                                    {event.description1}
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

            </div>
            <Accordian />

        </div>
    )
}
