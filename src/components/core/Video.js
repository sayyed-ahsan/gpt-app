import React, { useEffect, useRef } from 'react';

const Video = () => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'dtl6yswho',
        });
    }, []);

    return (
        <div className="video-container">
            <video
                className='w-full video-container'
                ref={videoRef}
                data-cld-public-id='ngybfndymeh4dak9ywae'
                controls
            // className="responsive-video" // Use className for styling
            />
        </div>
    );
};

export default Video;
