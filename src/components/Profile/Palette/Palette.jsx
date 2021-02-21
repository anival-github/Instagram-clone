/* eslint-disable react/prop-types */
import React from 'react';

const Palette = ({ user }) => {
  const renderPhotos = (posts) => posts
    .map((post) => {
      const { src, alt, timestamp } = post;
      return <img src={src} alt={alt} key={timestamp} />;
    });

  return (
    <div className="palette">
      { user
      && renderPhotos(user.posts)}
    </div>
  );
};

export default Palette;
