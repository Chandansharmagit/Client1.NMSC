import React from 'react'
import { Link } from 'react-router-dom'
import '../new/footerr.css'
export default function Accordian() {
    return (
        <div>

            <footer className="footer-distributed " >


                <div className="footer-left">

                    <h3>Nepal Model Secondary school <span><img src="https://www.hiclipart.com/free-transparent-background-png-clipart-ogvgq" alt="" /></span></h3>

                    <p className="footer-links">
                        <Link to="/" className="link-1">home</Link>

                        <Link to="/registration">Registration</Link>
                    

                        <Link to="/staff">Teaching staff</Link>

                        <Link to="/result">Check results</Link>


                    </p>

                    <p className="footer-company-name">Contact : 9845427041</p>
                   <a href="https://www.facebook.com/raghunagh.sharma"><p className="footer-company-name">Developer - Chandan sharma </p></a><span><img className="rounded-circle" alt="avatar1" src="https://scontent.fktm17-1.fna.fbcdn.net/v/t39.30808-1/438163929_1480113435909491_340285003192813421_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8Kuoh15qPucQ7kNvgHHHvKh&_nc_ht=scontent.fktm17-1.fna&oh=00_AYDAOO-1REZK9rL7u2OSLBjSHx0QQaXLkSF2KoeOyMLd8g&oe=664705FD" /></span>
                   <Link to="/personal_portfolio"><p className="footer-company-name">Chandan sharma </p></Link><span></span>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Devchuli Nagarapalika</span>Gandaki Pradesh ,Nepal</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>078-545309</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:nepalsecondaryschool@gmail.com">nepalsecondaryschool@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About NMSC</span>
                        Welcome to Nepal Model Secondary School, a beacon of academic excellence and holistic development, established in the year BS 2023. Under the visionary leadership of Principal Shiva Prasad Devkota
                    </p>

                    <div className="footer-icons">

                        <a href="https://www.facebook.com/nepal.secondaryschool.9"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Chandansharmagit"><i className="fa fa-github"></i></a>

                    </div>

                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.421329113209!2d84.20578347492184!3d27.673369926990215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399456e7be9fc2dd%3A0x7cfccb9de9348167!2sNepal%20Secondary%20School!5e0!3m2!1sen!2snp!4v1707678635477!5m2!1sen!2snp" width="1400px" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id='maps'></iframe>
                </div>


            </footer>

        </div>
    )
}
