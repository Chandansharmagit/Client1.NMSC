import React from 'react'
import Accordian from '../new/footer'
import { useEffect, useState } from 'react'
import '../news_and_events/news-event.css'
import axios from 'axios'
import program1 from '../images/program1.JPG'
export default function News3({ setProgress }) {

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
                        <div className="image-box"key={index}>
                            <img key={event._id} src={event.imageUrl3}  alt="" className='image-bx' />
                            <div className="text">
                                <p className="alltext">
                                    {event.description3}
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
