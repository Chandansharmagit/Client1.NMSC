import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../dashboard/massages.css';
import ResponsiveDrawer from './drawer';
export default function Massagefromnewad() {
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/api/send-email');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            setError('Error fetching images');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/api/send-email/${id}`);
            // Remove the div associated with the deleted image
            const updatedImages = images.filter(image => image._id !== id);
            setImages(updatedImages);
        } catch (error) {
            console.error('Error deleting image:', error);
            setError('Error deleting image');
        }
    };

    return (
        <>

            <div className="massage-grid">



                {error && <div>Error: {error}</div>}
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div className='card' key={index} id={image._id}>
                            <div className='img-container'>
                                <img src={`https://backend.nepalmodelsecondaryschool.com/${image.image}`} alt='' className='image' />
                            </div>
                            <h1>{image.firstName} {image.lastName}</h1>
                            <p>Email: {image.email}</p>
                            <p>Contact Number: {image.guardianContactNumber}</p>
                            <p>Subject: {image.subject}</p>
                            <p>Message: {image.message}</p>
                            {/* Delete button */}
                            <button onClick={() => handleDelete(image._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}

                <ResponsiveDrawer />
            </div>
        </>
    );
}
