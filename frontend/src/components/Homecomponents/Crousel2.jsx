import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crousel2 = ({props}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className=" pl-[30px] pr-[30px] m-auto mt-12">

      <div className="mt-2">
        <Slider {...settings}>
          {props.map((el, index) => (
            <div key={index} className="p-2">
              <img className="w-full h-auto rounded-xl" src={el} alt={`carousel-image-${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Crousel2;
