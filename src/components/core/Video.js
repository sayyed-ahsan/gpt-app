import React, { useEffect, useRef } from 'react';

const Video = () => {
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: 'dtl6yswho',
            autoplay: true, // Enable autoplay
            muted: true, // Mute the video to increase the likelihood that autoplay will work
        });
    }, []);

    return (
        <div className="video-container">
            <video
                className='w-full video-container'
                ref={videoRef}
                data-cld-public-id='ngybfndymeh4dak9ywae'
                controls
                muted={true} // Ensure the video element itself is muted as well
            />
        </div>
    );
};

export default Video;
