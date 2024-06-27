import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import axios from 'axios';
import '../alumu/almuni.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import required modules


export default function Almuni() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();

    })


    //getting the data from the database with the get method in react js to backend ndoe js using the axio metjod 

    const fetchEvents = async () => {
        try {

            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/images');
            setEvents(response.data);


        } catch (error) {
            console.log("error fetching the text :", error)
        }

    }


    //fetchin the another data into the chandan sharma




    return (

        <>
   

            <div className="name_pregiantion_slider">
                <h2 className="background double"><span>Messages from Visitors</span></h2>
            </div>

            {events.length > 0 ? (
                events.map((event, index) => (

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"


                    >






                        <SwiperSlide><div className="parent-container">



                            <blockquote className="responsive-quote">
                                <p>{event.paragraph}</p> <cite>{event.title3}</cite>
                            </blockquote>

                        </div></SwiperSlide>
                        <SwiperSlide><div className="parent-container">

                            <blockquote className="responsive-quote">
                                <p>Amidst a flood of text, well-crafted blockquotes stand out as beacons of sophistication, inviting readers to pause, contemplate, and savor the artful use of words. They not only elevate the visual appeal of content but also underscore the significance of thoughtful communication in a bustling digital landscape.</p> <cite>&mdash; Codepen Sammie</cite>
                            </blockquote>

                        </div></SwiperSlide>
                        <SwiperSlide><div className="parent-container">

                            <blockquote className="responsive-quote">
                                <p>Amidst a flood of text, well-crafted blockquotes stand out as beacons of sophistication, inviting readers to pause, contemplate, and savor the artful use of words. They not only elevate the visual appeal of content but also underscore the significance of thoughtful communication in a bustling digital landscape.</p> <cite>&mdash; Codepen Sammie</cite>
                            </blockquote>

                        </div></SwiperSlide>
                        <SwiperSlide><div className="parent-container">

                            <blockquote className="responsive-quote">
                                <p>Amidst a flood of text, well-crafted blockquotes stand out as beacons of sophistication, inviting readers to pause, contemplate, and savor the artful use of words. They not only elevate the visual appeal of content but also underscore the significance of thoughtful communication in a bustling digital landscape.</p> <cite>&mdash; Codepen Sammie</cite>
                            </blockquote>

                        </div></SwiperSlide>
                        <SwiperSlide><div className="parent-container">

                            <blockquote className="responsive-quote">
                                <p>Amidst a flood of text, well-crafted blockquotes stand out as beacons of sophistication, inviting readers to pause, contemplate, and savor the artful use of words. They not only elevate the visual appeal of content but also underscore the significance of thoughtful communication in a bustling digital landscape.</p> <cite>&mdash; Codepen Sammie</cite>
                            </blockquote>

                        </div></SwiperSlide>
                        <SwiperSlide><div className="parent-container">

                            <blockquote className="responsive-quote">
                                <p>Amidst a flood of text, well-crafted blockquotes stand out as beacons of sophistication, inviting readers to pause, contemplate, and savor the artful use of words. They not only elevate the visual appeal of content but also underscore the significance of thoughtful communication in a bustling digital landscape.</p> <cite>&mdash; Codepen Sammie</cite>
                            </blockquote>

                        </div></SwiperSlide>

                    </Swiper>
                ))
            ) : (
                <div>laoding...</div>
            )}










        </>
    );
}
