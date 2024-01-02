import React from 'react';
import ImageShow from '../ImageShow/ImageShow';
import './ImageList.css'

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  })
  return (
    <div className='image-list'>
      {/* <h4> Images: {images.length} </h4> */}
      <div>{renderedImages}</div>
    </div>
  )
}

export default ImageList;