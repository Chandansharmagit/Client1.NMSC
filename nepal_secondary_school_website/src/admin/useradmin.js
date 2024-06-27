



import React, { useState } from 'react';
import axios from 'axios';
import '../admin/newadmin.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Accordian from '../component/new/footer';
const UserDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    image: null // New state for the selected image file
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file selection for image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataWithImage = new FormData();
      // Append form data fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithImage.append(key, value);
      });
      const response = await axios.post('https://backend.nepalmodelsecondaryschool.com/api/users', formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); // Log the response from the backend
      setSubmitted(true);
      toast.success("data saved")
      navigate('/admin/panel/login')
    } catch (error) {
      console.error('Error:', error);
      toast.error("failed")
    }
  };

  return (
    <>

      <div>

        <form onSubmit={handleSubmit} className='login_form'>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label> 
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </label>
          <br />
          {/* Input field for image upload */}
          <label>
            Profile Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>

      </div>
      <Accordian />
    </>
  );
};

export default UserDetailsForm;
