import React, { useState } from 'react';
import leftArrow from '../assets/images/arrowLeft.png';
import rightArrow from '../assets/images/right-arrow.png';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () =>{
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  const handleRightClick  = () =>{
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  return (
    <div className="carouselCard">
       <div className='btnCarousel'>
      <button onClick={handleLeftClick}><img src={leftArrow} alt="Left" /></button>
      <button onClick={handleRightClick}><img src={rightArrow} alt="Right" /></button>
      </div> 
      <img src={images[currentImageIndex]} alt="Carousel" />
 
    </div>
  );
}

export default Carousel;
