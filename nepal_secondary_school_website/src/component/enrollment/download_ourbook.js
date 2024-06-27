import React, { useEffect } from 'react'
import '../enrollment/book.css'
import pdf from '../../three_year_plan/plans.pdf'
import { Link } from 'react-router-dom'
import Accordian from '../new/footer'
export default function Download_ourbook({setProgress}) {
    useEffect(() => {
        setProgress(40);

        setTimeout(() => {
            setProgress(100)
        }, 1000);
    },[])
    return (
        <>
        
        <div className='main-books'>
            <div className="div-box">
                
                     <h1 className="downlaod">download our books</h1>
                     <hr />
                

               
            </div>

            <div className="our_books">
                <div className="main-content">
                    <div className="nms">
                        <h2 id='nmsc'>Our 3 years mission and plans</h2>
                    </div>
                    

                 {/* <button type="button" class="btn btn-primary"id='btns' a  href={pdf} download={pdf}>Download</button> */}
                 <a className='btn btn-success' id='btns'href='' download=''>downlaod</a>
                </div>

                <div className="main-content">
                    <div className="nms">
                        <h2 id='nmsc'>NMSC Report</h2>
                    </div>
                    

                    <a className='btn btn-success' id='btns'href='' download=''>downlaod</a>
                </div>

                <div className="main-content">
                    <div className="nms">
                        <h2 id='nmsc'>NMSC Report</h2>
                    </div>
                    

                    <a className='btn btn-success' id='btns'href='' download=''>downlaod</a>
                </div>
            </div>

           
        </div>
        <Accordian/>
        </>
    )
}
