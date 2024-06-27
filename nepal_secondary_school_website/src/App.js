
import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import '../src/app.css';

import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewNav from './component/newNav';
import Result from './component/student_reasult/result';
import Slider from './component/swiper/slider';

import Staff_t from './teaching_staff/staff_t';
import Non_t from './teaching_staff/non_t';
import Newsdetails from './component/news_and_events/news-details';
import New1 from './component/news_and_events/new1';
import Events from './component/news_and_events/Events';
import News2 from './component/news_and_events/news2';
import News3 from './component/news_and_events/news3';
import News4 from './component/news_and_events/news4';
import Massage from './component/new_component/massage';
import StudentRegistrationForm from './component/new/admission/new_admission';
import About_us from './component/about/about_us';
import Enroll from './component/enrollment/enroll';

import ImageGallary from './gallary/imageGallary';
import Read_more_massage from './component/new_component/read_more_massage';
import Download_ourbook from './component/enrollment/download_ourbook';
import LoadingBar from 'react-top-loading-bar'


import Plan from './three_year_plan/plan';
import Management_commitee from './teaching_staff/adminintrative_commitee';
import School_management_team from './teaching_staff/school_management_team';
import Video_playback from './video_playback/video_playback';
import Facebook_massenger from './facebook/facebook_massenger';
import Personal_port from './component/developer/personal_port';


import Plustwolevel from './component/our_program/Plustwolevel';
import UserDetailsForm from './admin/useradmin';
import LoginForm from './admin/login_form/login_user';
import Forgotpass from './admin/forgotpassword/fpass';
import UserProfile from './userlogin/userInfo';
import Createpassword from './admin/forgotpassword/create_new_pass';
import AdminDashboard from './admin/dashboard/foreventChange';
import LogoutButton from './admin/forgotpassword/userlogout/ulogout';
import Userprofile from './admin/main_admin_user_dashboard/users_dashboard';
import ImageComponent from './admin/dashboard/imgemodel';
import Dashboard from './admin/dashboard/sliderd';
import Sliderchange from './admin/dashboard/sliderdynamic';

import Image_NMSC from './admin/dashboard/imageGallary';
import ForStaff from './admin/dashboard/forStaff';
import ImageUpload_working_staff from './admin/dashboard/workingstaff';
import Admin_contact from './admin/dashboard/admininstrative';
import Management from './admin/dashboard/managementcommitee';
import Massagefromnewad from './admin/dashboard/massagefromnewad';
import LoginDetails from './admin/dashboard/loginUser';
import ResponsiveDrawer from './admin/dashboard/drawer';
import VideoGallery from './gallary/videos';
import Cookies from 'js-cookie'
import Vid_NMSC from './admin/dashboard/videos';
function App() {

  //setting the useeffect for the authenticatiom




  const [progress, setProgress] = useState(0)


  const [product, setProduct] = useState([
    {
      id: 1,
      symbol: "234728343",
      name: "chandan sharma",

      img: "https://0.academia-photos.com/attachment_thumbnails/34807343/mini_magick20220706-14286-j7k0sy.png?1657092610",
    },
    {
      id: 2,
      symbol: "342499344",
      name: "arpan gaire",

      img: "https://www.addmengroup.com/ecas-images/H150901-College-University-Marksheet.png",
    },
    {
      id: 5,
      symbol: "12345",
      name: "deepika dhakal",

      img: "https://resulthosting.net/images/display-results-online-print-on-original-letterhead-distribute-original-marksheets.jpg",
    },


  ])

  return (


    <div className='App-Header'>
      <Helmet>
        <meta property="og:title" content="Nepal Model Secondary School" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nepalmodelsecondaryschool.com/your-image-url.png" />
        <meta property="og:url" content="https://nepalmodelsecondaryschool.com/" />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {`
      {
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Nepal Model Secondary School",
          "logo": "https://nepalmodelsecondaryschool.com/static/media/school.b1c1efd85f2ac5fd0d36.png",
          "description": "Description of the organization.",
          "address": {
              "@type": "PostalAddress",
              "streetAddress": "Devchuli Keureni Nawalpur",
              "addressLocality": "Locality",
              "addressRegion": "Gandakaki Province",
              "postalCode": "33000",
              "addressCountry": "Nepal"
          },
          "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+9779845427041",
              "contactType": "customer service"
          }
      }
    `}
        </script>
      </Helmet>





      <BrowserRouter>


        <NewNav product={product} />

        <LoadingBar
          color='green'
          height={2}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}

        />

        <Routes>

          <Route path='/' element={<Slider setProgress={setProgress} />}></Route>
          <Route path='/massage-from-principal' element={<Massage setProgress={setProgress} />}></Route>
          <Route path='/About' element={<About_us setProgress={setProgress} />}></Route>

          <Route path='/Image-gallary' element={<ImageGallary setProgress={setProgress} />}></Route>
          <Route path='/Download-our-book' element={<Download_ourbook setProgress={setProgress} />}></Route>
          <Route path='/Read_more_massage' element={<Read_more_massage setProgress={setProgress} />}></Route>
          <Route path='/staff' element={<Staff_t setProgress={setProgress} />}></Route>
          <Route path='/non_staff' element={<Non_t setProgress={setProgress} />}></Route>
          <Route path='/component' element={<Events setProgress={setProgress} />}></Route>
          <Route path='/news-details' element={<Newsdetails setProgress={setProgress} />}></Route>
          <Route path='/news1' element={<New1 setProgress={setProgress} />}></Route>
          <Route path='/student-enrollment' element={<Enroll setProgress={setProgress} />}></Route>
          <Route path='/news2' element={<News2 setProgress={setProgress} />}></Route>
          <Route path='/news3' element={<News3 setProgress={setProgress} />}></Route>
          <Route path='/news-news' element={<News4 setProgress={setProgress} />}></Route>
          <Route path='/registration' element={<StudentRegistrationForm setProgress={setProgress} />}></Route>


          <Route path='/result' element={<Result product={product} setProgress={setProgress} />}></Route>
          <Route path='/plans' element={<Plan product={product} setProgress={setProgress} />}></Route>


          <Route path='/Manangement-commitee' element={<Management_commitee product={product} setProgress={setProgress} />}></Route>
          <Route path='/school-management-team' element={<School_management_team setProgress={setProgress} />}></Route>

          <Route path='/videos_playback' element={<Video_playback setProgress={setProgress} />}></Route>

          <Route path='/personal_portfolio' element={<Personal_port />}></Route>
          <Route path='/plustwplevel/our_program' element={<Plustwolevel />}></Route>
          <Route path='/admin/panel/sign' element={<UserDetailsForm />}></Route>
          <Route path='/admin/panel/login' element={<LoginForm />}></Route>
          <Route path='/admin/panel/login/forgot-password-link' element={<Forgotpass s />}></Route>
          <Route path='/admin/panel/login/forgot-password-link/Createpassword/:id/:token' element={<Createpassword setProgress={setProgress} />}></Route>
          <Route path='/admin/panel/login/User_login' element={<UserProfile />}></Route>
          <Route path='/userlogout' element={<LogoutButton />}></Route>
          <Route path='/admin/panel/login/User_login/userlogout/admin-dashbboard-for-event' element={<AdminDashboard />}></Route>
          <Route path='/admin/panel/login/user_profile' element={<Userprofile />}></Route>

          <Route path='/image_profile' element={<ImageComponent />}></Route>
          <Route path='/image' element={<Dashboard />}></Route>
          <Route path='/sliderchange' element={<Sliderchange />}></Route>
          <Route path='/ImageGallary_dynamic' element={<Image_NMSC />}></Route>
          <Route path='/teachingStaffDetails' element={<ForStaff />}></Route>
          <Route path='/workingstaff' element={<ImageUpload_working_staff />}></Route>
          <Route path='/admin_contact' element={<Admin_contact />}></Route>
          <Route path='/management' element={<Management />}></Route>
          <Route path='/newmassages_from_viewers' element={<Massagefromnewad />}></Route>
          <Route path='/logindetails' element={<LoginDetails />}></Route>
          <Route path='/drawer' element={<ResponsiveDrawer />}></Route>
          <Route path='/videos_NMSC' element={< VideoGallery />}></Route>
          <Route path='/vid_NMSC' element={< Vid_NMSC />}></Route>
          
        </Routes>
        <Facebook_massenger />
      </BrowserRouter>






    </div>

  );
}

export default App;
// https://localhost:3000/admin/panel/login/forgot-password-link/Createpassword?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5kYW5zaGFybWE1NzU3NTdAZ21haWwuY29tIiwiaWQiOiI2NjQ4YjgwNTA0OWE0MDJjMWIyYzE3ODEiLCJpYXQiOjE3MTYwOTc3MTUsImV4cCI6MTcxNjA5Nzg5NX0.RHUcwMvF8u9jX76BdAMjztllvhaKqZzufkBs732VfRo

// // https://localhost:3000/admin/panel/login/forgot-password-link/Createpassword?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5kYW5zaGFybWE1NzU3NTdAZ21haWwuY29tIiwiaWQiOiI2NjQ4YjgwNTA0OWE0MDJjMWIyYzE3ODEiLCJpYXQiOjE3MTYwOTc3MTUsImV4cCI6MTcxNjA5Nzg5NX0.RHUcwMvF8u9jX76BdAMjztllvhaKqZzufkBs732VfRo