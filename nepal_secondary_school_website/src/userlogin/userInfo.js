// UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../userlogin/userProfile.css'; // Import CSS file

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from backend upon component mounting
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user'); // Assuming this endpoint returns the logged-in user's data
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="container">
            <div className="user-profile">
                {userData ? (
                    <>
                        <h2>User Profile</h2>
                        <div className="user-details">
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p><strong>First Name:</strong> {userData.firstName}</p>
                        </div>
                        {userData.image && (
                            <div className="profile-image">
                                <h3>Profile Image</h3>
                                <img src={`data:${userData.image.contentType};base64,${userData.image.data}`} alt="Profile" />
                            </div>
                        )}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
