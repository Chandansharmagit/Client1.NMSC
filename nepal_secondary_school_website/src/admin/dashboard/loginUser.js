import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../dashboard/massages.css';
import { ToastContainer, toast } from 'react-toastify';
import ResponsiveDrawer from './drawer';
export default function LoginDetails() {
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/loginUser');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            setError('Error fetching images');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/loginUser/${id}`);
            // Remove the div associated with the deleted image
            const updatedImages = images.filter(image => image._id !== id);
            setImages(updatedImages);
            toast.success("deleting sucess..")
        } catch (error) {
            console.error('Error deleting image:', error);
            setError('Error deleting image');
            toast.error("deleting failed")
        }
    };

    return (
        <>

            <h3 className='logine'>total logined users</h3>

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
                            <p> {image.phone}</p>
                            <p>Password: {image.password}</p>

                            {/* Delete button */}
                            <button onClick={() => handleDelete(image._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <div className='login'>Login user is empty Please login at first and check </div>
                )}

                <ResponsiveDrawer />
            </div>
        </>
    );
}
