import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveDrawer from './drawer';

const ImageUpload_working_staff = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        title1: '',

    });

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/calling_w');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
            setError('Error fetching images');
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUploadedImageUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            setError('Please select an image to upload.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('title1', formData.title1);

        formDataToSend.append('image', selectedFile);

        try {
            setLoading(true);
            const response = await axios.post('https://backend.nepalmodelsecondaryschool.com/calling_w', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadedImageUrl(response.data.imageUrl);
            setFormData({
                title1: '',

            });
            setSelectedFile(null);
            setLoading(false);
            fetchImages();
            toast.success('Image uploaded successfully.');
        } catch (error) {
            console.error('Error uploading image:', error);
            setError('Error uploading image. Please try again.');
            setLoading(false);
        }
    };

    const handleDelete = async (imageId) => {
        try {
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/calling_w/${imageId}`);
            fetchImages();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <h2>For Working staffs</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title1" value={formData.title1} onChange={handleInputChange} placeholder="Name of the Candidate" />

                <input type="file" onChange={handleFileChange} />
                <button type="submit" disabled={loading}>
                    Upload
                </button>
                {error && <div className="error">{error}</div>}
            </form>

            {uploadedImageUrl && (
                <div className="uploaded-image">
                    <img src={uploadedImageUrl} alt="Uploaded" />
                </div>
            )}

            <h2>Uploaded Images</h2>
            <div className="image-grid">

                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="image-card">
                            <img src={`https://backend.nepalmodelsecondaryschool.com/${image.url}`} alt="Uploaded" />


                            <p>{image.title1}</p>


                            <button onClick={() => handleDelete(image._id)} disabled={loading}>
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <ResponsiveDrawer />
            <ToastContainer />
        </div>
    );
};

export default ImageUpload_working_staff;
