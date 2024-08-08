import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image.avif';
import image3 from '../../assets/image 3.avif';
import image4 from '../../assets/image 2.avif';
import image5 from '../../assets/image (1).avif';
import image6 from '../../assets/image4.webp';
import image7 from '../../assets/image5.avif';
const PhotoCarousel = () => {
  return (
    <div>

    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
      <div>
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
      <div>
        <img src={image4} alt="Image 4" />
      </div>
      <div>
        <img src={image5} alt="Image 5" />
      </div>
      <div>
        <img src={image6} alt="Image 6" />
      </div>
      <div>
        <img src={image7} alt="Image 7" />
      </div>
    </Carousel>
    </div>
  );
};

export default PhotoCarousel;
