import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Accordian from '../new/footer'
import '../new_component/massages.css'


// import required modules


export default function Massage({ mystyle }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [images]);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/images');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);

        }
    };



    return (

        <div className='image-png'>
            <div class="container line">
                <h1 className='hq'>Wel-Come to Nepal Model Secondary School</h1>
            </div>
            {images.length > 0 ? (
                images.map((image, index) => (



                    <div className="massage-box-preginaition-col" key={index}  >
                        <div className="massage-box-pregination-row">

                            <div className="images-p">
                                <img src={`https://backend.nepalmodelsecondaryschool.com/${image.url}`} alt="upl" className='princial-image' />
                            </div>






                        </div><div className="massage-box-pregination-row">

                            <div className="detailing" mystyle={mystyle}>
                                <div className="headers">
                                    <h3><span className="isa-award">
                                        {image.title1}
                                        <br /> <span className='qotes'><div className='side-bar'>{image.title2}</div></span>
                                    </span></h3>

                                    <hr />

                                </div>
                                <p className="massages" >


                                    {image.paragraph}


                                    <br /><h3><span className='isa-award'>- {image.title3}
                                    </span></h3>


                                </p>
                                <hr />

                            </div>



                        </div>



                    </div>

                ))
            ) : (
                <div>Loading...</div>
            )}







        </div>

    )
}
