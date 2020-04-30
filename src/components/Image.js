import React from 'react';
import ModalImage from 'react-modal-image';
import ReactPlayer from 'react-player';

function Image({ imgUrl, title, hdurl, mediaType }) {
  if (mediaType === 'image') {
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
  } else {
    return (
      <ReactPlayer
        url={imgUrl}
        className='react-player'
        controls={true}
        playing
        width='50%'
        height='100%'
      />
    );
  }
}
export default Image;
