import React from 'react';

const YouTubeEmbed = () => {
  return (
    <div className="video-container m-6 md:m-12" style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */, height: 0 }}>
      <iframe
        src="https://www.youtube.com/embed/CQZxeoQeo5c?start=171"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
