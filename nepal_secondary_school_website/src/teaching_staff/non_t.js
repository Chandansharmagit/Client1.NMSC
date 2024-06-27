import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordian from '../component/new/footer';
import '../teaching_staff/teaching_staff_images/nont.css'; // Import your CSS file

export default function Non_t({ setProgress }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/calling_w');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            setError('Error fetching images');
        }
    };

    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100);
        }, 1000);
    }, []);

    return (
        <>
            <div className='all'>
                <h1 className="staff-name">Working Staff</h1>
                <hr />
                <div className="grid-container">
                    {images.length > 0 ? (
                        images.map((image, index) => (

                            <div className='card' key={index} id={Image._id}>
                                <div className='img-container'>
                                    <img src={`https://backend.nepalmodelsecondaryschool.com/${image.url}`} alt='' className='image' />
                                </div>
                                <h1>{image.title1} </h1>
                             
                                {/* Delete button */}

                            </div>
                        ))
                    ) : (
                        <div>loading..</div>
                    )}
                </div>
            </div>
            <Accordian />
        </>
    )
}
