import React from 'react'
import { useState } from 'react';
import Accordian from '../component/new/footer'
import { useEffect } from 'react'
import axios from 'axios';
export default function School_management_team({ setProgress }) {

    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);
    //fetching the data from the backend 

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/management');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            setError('Error fetching images');
        }
    };

    useEffect(() => {
        setProgress(40)
        setTimeout(() => {
            setProgress(100)
        }, 1000);
    }, [])
    return (
        <div>
            <div className='main_managemtn_commitee_with_preginations'>



                <h1 className="staff-name">Manangement Commitee</h1>



                <hr />

                <div className="containers">
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <div className='card' key={index} id={image._id}>
                                <div className='img-container'>
                                    <img src={`https://backend.nepalmodelsecondaryschool.com/${image.url}`} alt='' className='image' />
                                </div>
                                <h1>{image.title1} </h1>
                                <p> {image.title2}</p>
                                <p> {image.title3}</p>



                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}


























                </div>
































                <Accordian />
            </div>
        </div >
    )
}
