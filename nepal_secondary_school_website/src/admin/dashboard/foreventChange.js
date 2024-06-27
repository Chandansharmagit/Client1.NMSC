// React component (App.jsx)
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making API calls
import './events.css'
import ResponsiveDrawer from './drawer';
const AdminDashboard = () => {
    const [title, setTitle] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear any previous errors or success messages
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('title1', title);
        formData.append('paragraph', paragraph);

        try {
            const response = await axios.post('https://backend.nepalmodelsecondaryschool.com/events_change', formData, {
                headers: {
                    // Add headers if required by your backend (e.g., authentication)
                },
            });

            setTitle('');
            setParagraph('');
            setImageFile(null);
            setSuccessMessage(response.data.message);
            fetchEvents(); // Update events list after successful upload
        } catch (error) {
            setErrorMessage(error.response?.data?.error || 'Error uploading image');
        }
    };

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/events_change');
            setEvents(response.data.reverse());
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents(); // Fetch events on component mount
    }, []); // Empty dependency array to run only once

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };



    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/events_change/${eventId}`);
            setEvents(events.filter((event) => event._id !== eventId)); // Update state locally
            setSuccessMessage('Event deleted successfully');
        } catch (error) {
            console.error('Error deleting event:', error);
            setErrorMessage('Failed to delete event');
        }
    };

    return (
        <>

            <div className="admin-dashboard">
                <h2>Add News and events</h2>
                <form className="event-form" onSubmit={handleSubmit}>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    <textarea value={paragraph} onChange={(e) => setParagraph(e.target.value)} placeholder="Paragraph" />
                    <input type="file" onChange={handleImageChange} />
                    <button type="submit">Add Event</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <h2>Events</h2>
                <ul className="event-list">
                    {events.map((event) => (
                        <li className="event-item" key={event._id}>
                            <h3>{event.title1}</h3>
                            <p>{event.paragraph}</p>
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${event.url}`} alt={event.title1} />
                            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <ResponsiveDrawer />
        </>
    );
};

export default AdminDashboard;
