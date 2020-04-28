import React from 'react';

function Image({ imgUrl, title }) {
  return (
    <div className='image_container'>
      <img src={imgUrl} alt={title} />
    </div>
  );
}

export default Image;
