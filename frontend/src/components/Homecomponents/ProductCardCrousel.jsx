import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { FiPlus, FiMinus } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ProductCardCrousel.css';

const ProductCardCrousel = ({ data }) => {
  const navigate = useNavigate();
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    useCSS: false,
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product._id}`, { state: { product } });
  };

  return (
    <div className="w-3/4 m-auto mt-5">
      <div className="mt-2">
        <Slider {...settings}>
          {data.map((el) => (
            <div
              key={el._id}
              className="bg-white h-[420px] text-black rounded-xl flex flex-col justify-between"
              onClick={() => handleProductClick(el)}
            >
              <div className="flex-grow p-4">
                <div className="rounded-t-xl flex justify-center items-center">
                  <img
                    src={el.images[0]}
                    alt={el.name}
                    className="w-[200px] h-[200px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <p className="text-[0.9rem]">{el.name}</p>
                  <p className="text-gray-500">{el.shades} Shades</p>
                  <div className="font-bold text-[18px]">
                    ₹{el.price}
                    <span className="font-normal text-[12px] text-gray-500">
                      MRP <span className="line-through">₹{el.mrp}</span>
                    </span>
                  </div>
                  <div>
                    {el.rating} ({el.user_rated} reviews)
                  </div>
                </div>
              </div>
              <div className="buttons mb-1 flex items-center justify-between p-4">
                <button className="fav-button">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="56"
                      height="54"
                      rx="12"
                      fill="#FFFFFF"
                      stroke="#000000"
                      strokeWidth="4"
                    />
                    <path
                      d="M32 44.7272L30.4443 43.2935C23.5557 36.7285 18 31.7711 18 26.5C18 22.3579 21.3579 19 25.5 19C27.6154 19 29.6154 19.978 31 21.4944C32.3846 19.978 34.3846 19 36.5 19C40.6421 19 44 22.3579 44 26.5C44 31.7711 38.4443 36.7285 31.5557 43.2935L32 44.7272Z"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button className="bg-black text-white font-bold rounded-md w-[140px] btn h-[45px] p-4">
                  <span className="m-auto">SELECT ITEMS</span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCardCrousel;
