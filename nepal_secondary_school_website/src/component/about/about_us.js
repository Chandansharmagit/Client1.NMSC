import React from 'react'
import '../about/about.css'
import { useEffect } from 'react'
import Accordian from '../new/footer'
export default function About_us({ setProgress }) {
    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 1000);

    }, [])
    return (
        <div>
            <div className="all-preginations-with">

                <div className="image-preginations">
                    <h1 className="introductions">

                        Introduction
                        <hr />
                    </h1>

                    <p className="intro-preginations">
                        Welcome to Nepal Model Secondary School, a beacon of academic excellence and holistic development, established in the year BS 2023. Under the visionary leadership of Principal Shiva Prasad Devkota, our institution is committed to nurturing young minds and fostering a learning environment that empowers students to excel academically and personally.

                        Located next to CG Swasot Dham and in the laps of Devchuli hill with numerous scenic beauty,of Nawalparasi East, Nepal Model Secondary School provides a child friendly atmosphere for students to involve in creative activities to explore their potential for the bright future. 

                        At Nepal Model Secondary School, we prioritize a comprehensive approach to education, aiming to mold well-rounded individuals with a keen sense of responsibility, critical thinking skills, and a global perspective. Our dedicated faculty, innovative teaching methods, and a wide range of extracurricular activities contribute to the overall development of our students.

                        We take pride in fostering a sense of community and promoting values such as integrity, discipline, and respect. Our commitment to excellence is reflected in our pursuit of academic achievements, extracurricular successes, and the overall well-being of our students.

                        If you are looking for an educational institution that values both academic rigor and personal growth, Nepal Model Secondary School is the place for you. Join us on this journey of learning and discovery as we strive to shape the future leaders of tomorrow.
                    </p>
                    <img src="https://scontent.fktm17-1.fna.fbcdn.net/v/t1.6435-9/207176462_991415868356826_7625879326682663356_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9a8829&_nc_ohc=RiAGM0dvXbcAX-VXB5V&_nc_ht=scontent.fktm17-1.fna&oh=00_AfBTkyfsNgjAn9g51xGlM_kTwXzlSLwFbqx5ejWvb6-HRg&oe=65F6CA19" alt="" className='intro-img' />

                </div>
                <div className="all-details-preginations">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-file-earmark-fill" viewBox="0 0 16 16" id='logo-copy'>
                        <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" id='paths' />
                    </svg><span><h1 className="visions">Vision</h1></span>
                    <p className='about-us-paragraph'>The vision of the school is to be the foremost among the business, management, in the competitive world.</p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16" id='logo-copy'>
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg><span><h1 className="missions">Missions</h1></span>
                    <p className="our">The school is committed to :</p>
                    <ul>
                        <li><p>Provide a world class education for our student.</p></li>

                        <li><p>Provide real life environment during the pursuit of the course.</p></li>
                        <li><p>Encourage lifelong learning through the extension education. </p></li>
                        <li><p>Award scholarships on various counts that address social issues.</p></li>
                    </ul>


                    {/* our three plans and missions  */}

                    














                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" fill="currentColor" class="bi bi-menu-button" viewBox="0 0 16 16" id='logo-copy'>
                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
                        <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                    </svg><span><h1 className="missions">Objectives</h1></span>
                    <p className="our">The college is committed to achieve the following objectives in a time & budget bounded frame:</p>
                    <ul>
                        <li><p>To implement modern mean of tools & technique in teaching & learning environment.</p></li>

                        <li><p>To increase social awarness program each year by providing need-based education.</p></li>
                        <li><p>To conduct at least two research programs each year by R&D section in the field of management , informartion technology,  engineering, socio-economic, science and education sector by involving the concerned depatments and faculties </p></li>
                        <li><p>To provide morally approved, socailly progressive, economically viable and culturally broad-based educational skills.</p></li>
                    </ul>

                </div>
            </div>

            <Accordian />

        </div>
    )
}
