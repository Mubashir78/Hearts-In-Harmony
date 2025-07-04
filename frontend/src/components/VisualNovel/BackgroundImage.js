import React from 'react';

const BackgroundImage = ({ src, alt }) => {
  return (
    <div className="absolute inset-0 z-10">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
};

export default BackgroundImage;