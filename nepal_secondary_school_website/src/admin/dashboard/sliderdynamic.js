import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { decodeToken } from "react-jwt"; // Import decodeToken from react-jwt
import { useNavigate } from "react-router-dom";
import ResponsiveDrawer from './drawer';
import { ToastContainer, toast } from 'react-toastify';
import '../dashboard/dashboard.css';

export default function Sliderchange() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        image: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    });
    // frontend (e.g., in Sliderchange.js)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = decodeToken(token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                localStorage.removeItem('token');
                navigate('/admin/panel/login');
                toast.error('Session expired. Please log in again.');
            } else {
                fetchEvents();
            }
        } else {
            navigate('/admin/panel/login');
            toast.error('User not authorized');
        }
    }, [navigate]);


    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/slider_change');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleInputChange = (e) => {
        if (e.target.name.startsWith('image')) {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithImage = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataWithImage.append(key, value);
            });

            const response = await axios.post('https://backend.nepalmodelsecondaryschool.com/slider_change', formDataWithImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setEvents([...events, response.data]);
            // Clear form data after successful submission
            setFormData({
                image: null,
                image1: null,
                image2: null,
                image3: null,
                image4: null,
            });
            toast.success('Data change success');
        } catch (error) {
            console.error('Error creating event:', error);
            toast.error('Failed to create event');
        }
    };

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/slider_change/${eventId}`);
            setEvents(events.filter(event => event._id !== eventId));
            toast.success('Successfully deleted the event');
        } catch (error) {
            console.error('Error deleting event:', error);
            toast.error('Failed to delete the event');
        }
    };

    return (
        <div className='dashboard-event_change '>

            <h2 className='admin-dashboard'>For Slider Changer</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" onChange={handleInputChange} accept="image/*" />
                <input type="file" name="image1" onChange={handleInputChange} accept="image/*" />
                <input type="file" name="image2" onChange={handleInputChange} accept="image/*" />
                <input type="file" name="image3" onChange={handleInputChange} accept="image/*" />
                <input type="file" name="image4" onChange={handleInputChange} accept="image/*" />
                <button type="submit">Save Changes</button>
            </form>
            <div>
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div key={index}>
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl}`} alt="Event" width='20%' />
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl1}`} alt="Event" width='20%' />
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl2}`} alt="Event" width='20%' />
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl3}`} alt="Event" width='20%' />
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.imageUrl4}`} alt="Event" width='20%' />

                            <button onClick={() => handleDelete(event._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <ResponsiveDrawer />
            <ToastContainer />
        </div>
    );
};
