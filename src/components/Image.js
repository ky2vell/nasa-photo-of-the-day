import React from 'react';
import ModalImage from 'react-modal-image';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

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
      <Player>
        <source src={imgUrl} fluid='false' width='810' />
      </Player>
    );
  }
}
export default Image;
