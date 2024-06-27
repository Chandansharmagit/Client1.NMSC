import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Welcome_page from '../new_component/welcome_page';
import Benefits from '../new_component/benefits';
import Massage from '../new_component/massage';
import For_student from '../new/for_student';
import Contactform from '../new/contactform';
import Accordian from '../new/footer';
import ocem from '../images/ocem1.JPG'
import newadmission from '../swiper/admission.jpg'
import Video_playback from '../../video_playback/video_playback';

import new_result from '../../main_logo/newimages.jpg'
import image2 from '../images/program1.JPG'
import nsmcFamily from '../images/nsmcFamily.JPG'
import chidrens from '../images/childrens.JPG'
import assembly from '../swiper/assembly.jpg'
import Almuni from './alumu/almuni';
import './sl.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from backend upon component mount
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/slider_change');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    //creating the useeffect to show th animation in our reacvt js webiste using the javascript



    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div >
            {
                events.map((image) => (
                    <div className="event" >

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
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper"
                        >
s


                            <SwiperSlide> <img key={image._id} src={`https://backend.nepalmodelsecondaryschool.com/${image.imageUrl}`}  alt="" className='images' />
                            </SwiperSlide>
                            <SwiperSlide> <img src={`https://backend.nepalmodelsecondaryschool.com/${image.imageUrl1}`} alt="" className='images' /></SwiperSlide>
                            <SwiperSlide> <img src={`https://backend.nepalmodelsecondaryschool.com/${image.imageUrl2}`} alt="" className='images' /></SwiperSlide>
                            <SwiperSlide> <img src={`https://backend.nepalmodelsecondaryschool.com/${image.imageUrl3}`} alt="" className='images' /></SwiperSlide>
                            <SwiperSlide><img src={`https://backend.nepalmodelsecondaryschool.com/${image.imageUrl4}`} alt="" className='images' /></SwiperSlide>
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>


                                </svg>
                                <span ref={progressContent}></span>
                            </div>
                        </Swiper>
                    </div>
                ))

            }
            <Massage />

            <Welcome_page />

            <Video_playback />


            <Benefits />

            <For_student />
            {/* <Almuni /> */}

            <Contactform />
            <Accordian />







        </div>
    );
}
