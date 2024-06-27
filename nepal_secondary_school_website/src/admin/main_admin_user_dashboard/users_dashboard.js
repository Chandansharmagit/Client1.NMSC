import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../main_admin_user_dashboard/userprofile.css';

const Userprofile = () => {
    // const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     fetchevents();
    // }, []); // Empty dependency array to ensure useEffect runs only once

    // const fetchevents = async () => {
    //     try {
    //         const response = await axios.get('/api/users');
    //         console.log("response", response.data);
    //         setEvents(response.data);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    return (
        <>
            {/* {events.map((event) => (
                <div key={event.id} className="card">
                    <img className="card-img-top" src={event.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{event.firstname} {event.lastname}</h5>
                        <h5 className="card-title">{event.email}</h5>
                        <h5 className="card-title">{event.phone}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))} */}
        </>
    );
};

export default Userprofile;
