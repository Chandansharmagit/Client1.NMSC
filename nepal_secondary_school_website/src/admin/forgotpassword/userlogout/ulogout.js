import React from 'react';
import axios from 'axios';
import './userlogin.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Make a request to the backend to log out the user
            await axios.get('/log_out');

            // Remove the token from localStorage
            localStorage.removeItem('token');

            // Redirect the user to the login page or any other page
            navigate('/admin/panel/login');

            // Show a success message
            toast.success('Logout successful.');
        } catch (error) {
            console.error('Logout failed:', error);

            // Show an error message
            toast.error('Logout failed.');
        }
    };

    return (
        <div className='div-nav-button'>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LogoutButton;
