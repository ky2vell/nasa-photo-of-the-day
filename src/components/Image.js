import React from 'react';

function Image({ imgUrl, title }) {
  return (
    <div>
      <img src={imgUrl} alt={title} />
    </div>
  );
}

export default Image;
