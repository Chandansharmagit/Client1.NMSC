import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordian from '../new/footer'
import '../news_and_events/event.css'
import event1 from '../images/event1.JPG'
import ocem from '../images/ocem1.JPG'
import program from '../images/program2.JPG'
import program1 from '../images/program1.JPG'
import program4 from '../images/program4.JPG'
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'universal-cookie';

import addmission from '../../component/news_and_events/admission_new.jpg'
export default function Events({ setProgress, content, onChange }) {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);






    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/events_change');
            console.log('Response:', response.data); // Log response data
            setEvents(response.data.reverse());

        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };








    //making the useeffecet to run top loading search
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 500);
    }, [])





    //making the code for the content change by the client

    const hanldeonchange = (event) => {
        onChange(event.target.value);
    }




    return (

        <>

            <Helmet>
                <title>News and Events</title>


                <meta name="description" content="check our latest news and events details" />
                <meta property="og:url" content="https://backend.nepalmodelsecondaryschool.com/Component" />
                <link rel='canonical' href='/Component' />
            </Helmet>

            <div className="event" >
                <div className='top-nav'>

                    <div class="container line">



                        <h1 className='hq'>News and Events</h1>
                    </div>
                    {events.length > 0 ? (
                        events.map((event, index) => (

                            <div className="col-preginations">

                                <div className="row-preginations">

                                    <div className="image">
                                        <img src={`https://backend.nepalmodelsecondaryschool.com/${event.url}`} alt="" className='new-images' />
                                        
                                    </div>

                                </div>


                                <div className="row-preginations" key={event._id}>
                                    <h1 className="titles" >{event.title1}</h1>
                                    <div className="all-details">
                                        <p>{event.paragraph}</p>
                                    </div>

                                    <Link to='/news-details'><button type="button" className="btn btn-primary">Read More</button></Link>
                                </div>







                            </div>

                        ))
                    ) : (
                        <div>Loading...</div>
                    )}








                    <br />
                    <br />
                    <br />


                </div >
            </div>

            <Accordian />

        </>
    )
}

