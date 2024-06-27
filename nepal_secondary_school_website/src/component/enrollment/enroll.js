import React from 'react'
import '../enrollment/enrollme.css'
import { useEffect } from 'react'
import Accordian from '../new/footer'
export default function Enroll({ setProgress }) {
  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100)
    }, 1000);

  }, [])
  return (
    <div>
      <div className="student-enrollement">

        <img src="https://www.psusd.us/cms/lib/CA02204874/Centricity/Domain/193/Student%20Enrollment%20Banner.jpg" alt=""className='updating-soon-img' />
        <div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64" id='enrolls'>
          <div class="w3-quarter">
            <span class="w3-xxlarge">75+</span>
            <br />teaching Staffs 
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">20+</span>
            <br/> Non-teaching staffs
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">1850+</span>
            <br/>Total Students Enrolled
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">800+</span>
            <br/>Total Girls Enrolled
          </div>
          <div class="w3-quarter">
            <span class="w3-xxlarge">1050+</span>
            <br/>Total boys Enrolled
          </div>
        </div>
      </div>

      <Accordian />
    </div>
  )
}
