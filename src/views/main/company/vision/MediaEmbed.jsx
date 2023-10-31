import React, { useState } from 'react';

const MediaEmbed = ({ mediaUrl, thumbnailUrl }) => {
  const [showMedia, setShowMedia] = useState(false);

  const toggleMedia = () => {
    setShowMedia(!showMedia);
  };

  return (
    <div className='border border-black bg-black justify-content-center align-items-center'>
      {showMedia ? (
        <video className='w-100' controls src={mediaUrl} width="400" height="300"></video>
      ) : (
        <img className='w-100 '  src={thumbnailUrl} alt="Thumbnail" onClick={toggleMedia}/>
      )}
    </div>
  );
};

export default MediaEmbed;
