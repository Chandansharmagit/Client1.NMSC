import React, { useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Welcome_page from '../new_component/welcome_page';
import Benefits from '../new_component/benefits';
import Massage from '../new_component/massage';
import For_student from '../new/for_student';
import Contactform from '../new/contactform';
import Accordian from '../new/footer';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './sl.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
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

                <SwiperSlide> <img src='https://lh3.googleusercontent.com/p/AF1QipP8jRQvZ7uTYPHHwlv0JLIkFJhesSwDxjljhsoW=s1360-w1360-h1020' alt="" className='images'/></SwiperSlide>
                <SwiperSlide> <img src='https://wallpapercave.com/wp/wp2094629.jpg' alt=""  className='images'/></SwiperSlide>
                <SwiperSlide> <img src='https://wallpapercave.com/wp/wp2094629.jpg' alt=""  className='images'/></SwiperSlide>
                <SwiperSlide><img src='https://wallpapercave.com/wp/wp2094629.jpg' alt=""  className='images'/></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>

            <Welcome_page/>
            <Massage/>
            <Benefits/>
          
            <For_student/>
            <Contactform/>
            <Accordian/>


            
           


          
        </>
    );
}
