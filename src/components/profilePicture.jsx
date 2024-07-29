// components/ProfilePicture.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePicture = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Fetch the profile picture from the backend
    axios.get('/api/profile-picture') // Adjust the URL as needed
      .then(response => setImageSrc(response.data.imageUrl))
      .catch(error => console.error('Error fetching profile picture:', error));
  }, []);

  return (
    <div className="w-[169px] h-[169px] rounded-full overflow-hidden">
      {imageSrc ? (
        <img src={imageSrc} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          {/* Placeholder for when the image is loading or if there's an error */}
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
