
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import '../dashboard/drawer.css'
import { decodeToken } from "react-jwt"; // Import decodeToken from react-jwt
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { ToastContainer, toast }
    from 'react-toastify';

export default function ResponsiveDrawer() {
    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const isAuthenticated = !!Cookies.get('auth');
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin/panel/login');
        } else {

        }

    }, [])



    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('/loginUser');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);

        }
    };

    //making the authentication 





    return (
        <>

            <div>
                <div className="area">


                </div><nav className="main-menu">
                    <ul>





                        <li>
                            <Link to='/drawer'>   <a href=''>
                                <i className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
                                    Admin Dashboard
                                </span>
                            </a></Link>

                        </li>

                        <li>
                            <Link to='/vid_NMSC'>   <a href=''>
                                <i className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
                                    Video gallary NMSC
                                </span>
                            </a></Link>

                        </li>
                        <li className="has-subnav">
                            <Link to='/image_profile'>  <a href="#">
                                <i className="fa fa-globe fa-2x"></i>
                                <span className="nav-text">
                                    Massage From principal
                                </span>
                            </a></Link>

                        </li>
                        <li className="has-subnav">
                            <Link to='/admin/panel/login/User_login/userlogout/admin-dashbboard-for-event'> <a href="#">
                                <i className="fa fa-comments fa-2x"></i>
                                <span className="nav-text">
                                    Change in News and Events
                                </span>
                            </a></Link>

                        </li>
                        <li className="has-subnav">
                            <Link to='/ImageGallary_dynamic'> <a href="#">
                                <i className="fa fa-camera-retro fa-2x"></i>
                                <span className="nav-text">
                                    School Image Gallary
                                </span>
                            </a></Link>

                        </li>
                        <li>
                            <Link to='/sliderchange'><a href="#">
                                <i className="fa fa-film fa-2x"></i>
                                <span className="nav-text">
                                    Main top slider Change
                                </span>
                            </a></Link>
                        </li>
                        <li>
                            <Link to='/teachingStaffDetails'>  <a href="#">
                                <i className="fa fa-book fa-2x"></i>
                                <span className="nav-text">
                                    Teaching Staff add or remove
                                </span>
                            </a></Link>
                        </li>
                        <li>
                            <Link to='/workingstaff'>  <a href="#">
                                <i className="fa fa-cogs fa-2x"></i>
                                <span className="nav-text">
                                    Add working staff or remove
                                </span>
                            </a></Link>
                        </li>
                        <li>
                            <Link to='/admin_contact'>  <a href="#">
                                <i className="fa fa-map-marker fa-2x"></i>
                                <span className="nav-text">
                                    Add Administrative Staffs or remove
                                </span>
                            </a></Link>
                        </li>
                        <li>
                            <Link to='/management'><a href="#">
                                <i className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
                                    Add Management team or Remove
                                </span>
                            </a></Link>
                        </li>
                        <li>
                            <Link to='/newmassages_from_viewers'>  <a href="#">
                                <i className="fa fa-cogs fa-2x"></i>
                                <span className="nav-text">
                                    New Admission Massages
                                </span>
                            </a></Link>
                        </li>
                        <li>
                            <Link to='/logindetails'>  <a href="#">
                                <i className="fa fa-map-marker fa-2x"></i>
                                <span className="nav-text">

                                    total user Login

                                </span>
                            </a></Link>
                        </li>


                        <li className="has-subnav">
                            <Link to='/admin/panel/login/User_login/userlogout/admin-dashbboard-for-event'> <a href="#">
                                <i className="fa fa-comments fa-2x"></i>
                                <span className="nav-text">
                                    result updation
                                </span>
                            </a></Link>

                        </li>




                    </ul>



                    <ul className="logout">
                        <li>
                            <a href="#">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">
                                    Logout
                                </span>
                            </a>
                        </li>
                    </ul>



                </nav>


            </div>


        </>
    )
}
