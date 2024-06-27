import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Accordian from '../component/new/footer';
import '../teaching_staff/management_commiteee.css'; // Import your CSS file

export default function Management_commitee({ setProgress }) {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/admin');
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
        <div className='main_managemtn_commitee_with_preginations'>
            <h1 className="staff-name">Administrative Committee</h1>
            <hr />

            <div className="grid-container">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div className='card' key={index} id={Image._id}>
                            <div className='img-container'>
                                <img src={`https://backend.nepalmodelsecondaryschool.com/${image.url}`} alt='' className='image' />
                            </div>
                            <h1>{image.title1} </h1>
                            <p>post : {image.title2}</p>


                            <p>Contact : <Link to={`tel:${image.title3}`}>{image.title3}</Link></p>
                            {/* Delete button */}

                        </div>
                    ))
                ) : (
                    <div>loading..</div>
                )}
            </div>

            <Accordian />
        </div >
    );
}
