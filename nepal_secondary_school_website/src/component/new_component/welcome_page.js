import React from 'react';
import { useRef } from 'react'
import { useEffect } from 'react'
import '../new_component/welcome.css'
export default function Welcome_page() {

    //animating the welcome page 
    const animatedRef = useRef(null);

    //making the another ref fot the not copying the text in the massage box

    const not_select = useRef(null);

    useEffect(() => {
        if(not_select.current){
            not_select.current.style.userSelect = 'none';
        }
    },[not_select])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in'); // Add the 'fade-in' class when the element is in view
                    } else {
                        entry.target.classList.remove('fade-in'); // Remove the class when the element is out of view
                    }
                });
            },
            { threshold: 0.5 } // Customize the threshold as needed
        );

        if (animatedRef.current) {
            observer.observe(animatedRef.current);
        }

        return () => {
            if (animatedRef.current) {
                observer.unobserve(animatedRef.current);
            }
        };
    }, []); // Run this effect only once on mount

    //making the not able to copy the text
    const handlecopy = (event) => {
        event.preventDefault();
        alert("Copying is not allowed. This content is protected by copyright.")
    }

    return (
        <div ref={animatedRef} className="animated-container">



            <div className="col-pregaintion" onCopy={handlecopy} ref={not_select}>

                <div className="row-preginations">
                    <div className="all-details">
                        <h1 className="welcome-to">

                            <span className='spans'><img src="https://www.blackboard.com.np/assets-blackboard/images/Group%204373.png" alt="" className='circle' /></span>
                            Good Educations
                            Makes A Better World.
                        </h1>
                        <p className='texts'>
                            A unique, energetic school management system in Nepal.
                            We have extremely magnificent and well-defined features, hence serving to different requirements of school administration, teachers, and students. Ranked as the best school management software in Nepal, Black Board Learn+ offers an immersive learning experience for the students.
                        </p>


                    </div>

                </div>
                <div className="row-preginations">
                    <div className="images-img">
                        <img src="https://cdn.dribbble.com/users/5263864/screenshots/17280292/media/97209d8e34a69cb9a3cf6a9df0fafed6.gif" alt="" className='new_imagess' />
                    </div>
                </div>


            </div>


        </div>
    )
}
