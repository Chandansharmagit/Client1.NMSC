import React, { useEffect } from 'react'
import { useState } from 'react';
import './new.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Accordian from '../new/footer';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
export default function Result({ product, setProgress }) {
    const navigate = useNavigate();

    //fetching the data from the backend


    

    //making the user authenication if the user is login or not





    useEffect(() => {
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 1000);

    }, [])







    const [searchTerm, setsearchTerm] = useState("");
    return (



        <>

            <Helmet>
                <title>Results</title>

                <meta name="description" content="Results" />
                <meta property="og:url" content="https://nepalmodelsecondaryschool.com/result" />
                <link rel='canonical' href='/result' />
            </Helmet>

            <div id="main-sybmols">

                <div className="selections">

                    <div class="container line">
                        <h1 className='hq'>Check Result</h1>
                    </div>



                    <input className="form-control mr-sm-2" type="search" placeholder="enter your full symbol no" aria-label="Search" id='control' onChange={(event) => {
                        setsearchTerm(event.target.value);
                    }}></input>

                    <div className="form-group">
                        <label className='lables' for="sel1">Select your Class</label>
                        <select className="form-control" id="sel1">
                            <option>Class 10</option>
                            <option>Class 11</option>
                            <option>Class 12</option>
                            <option>Class 8</option>
                        </select>
                    </div>

                </div>

                <hr />
            </div>

            <div className="mains">
                {
                    product
                        .map((val) => {
                            if (searchTerm === "") {
                                return;

                            } else if (val.symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return (
                                    <div className="image-containers">

                                        <div className="mains">
                                            <img src={val.img} alt="" className='images-chandan' />
                                        </div>


                                    </div>
                                )
                            }
                        })
                }
            </div>


            <Accordian />
        </>

    )

}
