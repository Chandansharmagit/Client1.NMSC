import React, { useEffect, useState } from 'react'
import { useNavigate, BrowserRouter } from "react-router-dom";
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom'
import App from '../App';
import '../teaching_staff/loaderr.css'
import loaderimg from '../teaching_staff/admission.jpg'
export default function Loader() {

    //making the close button for the whole loader page and making the redirecting towards the home page or main page

    const [show, setShow] = useState(true)



    return (
        <>

            {







                show ? <div className='bodys'>

                    <div className="loaders">
                        <div className="names_of_theloader">

                            <img src={loaderimg} alt="" className='img-name-name' /><span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16" id='cross'onClick={() => {
                                    setShow(false)
                                }} >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                </svg>


                            </span>
                            <h5 className='welcome-to-preginatio'>" समुदायको पहिलो आकर्षण नेणल <br></br>नमुना मा.वि."</h5>

                        </div>
                    </div>
                </div> : null
            }
        </>

    )
}
