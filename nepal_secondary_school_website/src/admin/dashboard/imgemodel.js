
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveDrawer from './drawer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        title1: '',
        title2: '',
        title3: '',
        paragraph: '',
    });

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/images');
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
        formDataToSend.append('title2', formData.title2);
        formDataToSend.append('title3', formData.title3);
        formDataToSend.append('paragraph', formData.paragraph);
        formDataToSend.append('image', selectedFile);

        try {
            setLoading(true);
            const response = await axios.post('https://backend.nepalmodelsecondaryschool.com/images/upload', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadedImageUrl(response.data.imageUrl);
            setFormData({
                title1: '',
                title2: '',
                title3: '',
                paragraph: ''
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
            setLoading(true);
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/images/delete/${imageId}`);
            setImages(images.filter((image) => image._id !== imageId));
            setLoading(false);
            toast.success('Image deleted successfully.');
        } catch (error) {
            console.error('Error deleting image:', error);
            setError('Error deleting image. Please try again.');
            setLoading(false);
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
            <h2>For principal massage upload</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title1" value={formData.title1} onChange={handleInputChange} placeholder="Message From Head Teacher -title" />
                <textarea name="title2" value={formData.title2} onChange={handleInputChange} placeholder=" समुदायको पहिलो आकर्षण नेणल नमुना मा.वि. -Quotes"></textarea>
                <input type="text" name="title3" value={formData.title3} onChange={handleInputChange} placeholder="Shiva Prasad Devkota -Name" />
                <textarea name="paragraph" value={formData.paragraph} onChange={handleInputChange} placeholder="main massage from principal should be here -Main massage"></textarea>
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
                            <p>{image.title2}</p>
                            <p>{image.title3}</p>

                            <button onClick={() => handleDelete(image._id)} disabled={loading}>
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <div>please add field at first</div>
                )}
            </div>
            <ResponsiveDrawer />

            <ToastContainer />
        </div>
    );
};

export default ImageUpload;

