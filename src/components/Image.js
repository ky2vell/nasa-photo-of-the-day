import React from 'react';
import ModalImage from 'react-modal-image';

function Image({ imgUrl, title, hdurl }) {
  return (
    <div className='image_container'>
      <ModalImage
        small={imgUrl}
        large={hdurl}
        alt={title}
        className='small_img'
      />
    </div>
  );
}

export default Image;
