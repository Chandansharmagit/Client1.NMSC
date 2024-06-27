import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './vid.css';
import ResponsiveDrawer from './drawer';

const Vid_NMSC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [editingVideo, setEditingVideo] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await axios.get('https://backend.nepalmodelsecondaryschool.com/videos');
            setVideos(response.data.reverse());
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleFileChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('video', video);

        try {
            let response;
            if (editingVideo) {
                response = await axios.put(`https://backend.nepalmodelsecondaryschool.com/videos/${editingVideo._id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: progressEvent => {
                        setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                    }
                });
                setEditingVideo(null);
            } else {
                response = await axios.post('https://backend.nepalmodelsecondaryschool.com/uploading', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: progressEvent => {
                        setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
                    }
                });
            }
            console.log(response.data);
            fetchVideos();
        } catch (error) {
            console.error('Error uploading/updating video:', error);
        }
    };

    const handleEdit = (video) => {
        setTitle(video.title);
        setDescription(video.description);
        setEditingVideo(video);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://backend.nepalmodelsecondaryschool.com/videos/${id}`);
            fetchVideos();
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='fo'>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
                <input type="file" onChange={handleFileChange} accept="video/*" required />
                <button type="submit">{editingVideo ? 'Update Video' : 'Upload Video'}</button>
            </form>

            {uploadProgress > 0 && (
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${uploadProgress}%` }}></div>
                </div>
            )}

            <div className='getting'>
                <h2>Video List</h2>
                {videos.map((video) => (
                    <div key={video._id}>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                        <video width="320" height="240" controls>
                            <source src={`https://backend.nepalmodelsecondaryschool.com/${video.videoUrl}`} type="video/mp4" />
                        </video>
                        <button onClick={() => handleEdit(video)}>Edit</button>
                        <button onClick={() => handleDelete(video._id)}>Delete</button>
                    </div>
                ))}
            </div>

            <ResponsiveDrawer />
        </div>
    );
};

export default Vid_NMSC;
