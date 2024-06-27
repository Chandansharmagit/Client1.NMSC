import React, { useState } from 'react';
import '../admission/ads.css'
import axios from 'axios';
import Accordian from '../footer';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
const StudentRegistrationForm = () => {

    //making the connetion with the backend to send the email to the administrator




    const [form, setForm] = useState('')



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        applyForClass: '',
        guardianName: '',
        guardianContactNumber: '',
        subject: '',
        message: '',
        image: null,
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            // Make POST request to the backend endpoint
            await axios.post('https://backend.nepalmodelsecondaryschool.com/api/send-email', formDataToSend);

            toast.success('Form Submitted successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Error sending email');
        }
    };



    return (
        <>

            <Helmet>
                <title>Get yourself admitted in Nepal model secondary school</title>

                <meta name="description" content="Simply fill out this form to get yourself admitted in nepal model secondary school" />
                <meta property="og:url" content="https://nepalmodelsecondaryschool.com/registration" />
                <link rel='canonical' href='https://nepalmodelsecondaryschool.com/registration' />
            </Helmet>



            <hr />

            <div class="container line">
                <h1 className='hq'>Online Registration Or Vacancy Form</h1>
            </div>

            <div className="col-preginations-image">


                <div className="row-preginations-image">
                    <form onSubmit={handleSubmit} id='forms'>


                        {/* Existing fields */}
                        <label>
                            <h6>First Name:</h6>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Last Name:</h6>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Email:</h6>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </label>
                        <label>
                            <h6>Date of Birth:</h6>
                            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Gender:</h6>
                            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <label>
                            <h6>Apply for Class:</h6>
                            <input type="text" name="applyForClass" value={formData.applyForClass} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Guardian Name:</h6>
                            <input type="text" name="guardianName" value={formData.guardianName} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Guardian Contact Number:</h6>
                            <input type="text" name="guardianContactNumber" value={formData.guardianContactNumber} onChange={handleInputChange} required />
                        </label>

                        {/* Existing fields */}
                        <label>
                            <h6>Subject:</h6>
                            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Message:</h6>
                            <textarea name="message" value={formData.message} onChange={handleInputChange} required />
                        </label>
                        <label>
                            <h6>Upload your Documents / birth registration or Certificate:</h6>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </label>
                        <button type="submit" >Send Email</button>
                        <span> <h3>{form}</h3> </span>
                    </form>
                </div>
                <div className="row-preginations-image">

                    <div className="images-adminis">
                        <img src="https://img.freepik.com/free-vector/college-admission-concept-illustration_114360-13739.jpg" className='adms' alt="" />
                    </div>
                </div>

            </div>

            <Accordian />


        </>
    );
};

export default StudentRegistrationForm;
