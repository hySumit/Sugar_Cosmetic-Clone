import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown';
import Footer from '../Footer/Footer';
import { IoIosArrowForward } from 'react-icons/io';
import ReactImageMagnify from 'react-image-magnify';

const SingleProductPage = () => {
  const location = useLocation();
  const { product } = location.state;
  const [hoveredImage, setHoveredImage] = useState(product.images[0]);

  return (
    <div className="bg-[#F2F2F2]">
      <Navbar />
      <Dropdown />
      <div className="SingleProductPage">
        <div className="navigation mt-5 mb-5 p-[15px] bg-white flex items-center gap-2">
          <Link className="text-gray-400" to="/">
            Home
          </Link>
          <div>
            <IoIosArrowForward />
          </div>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </div>
        <div className="SingleProductCard flex">
          <div className="left-pro-image flex flex-col gap-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className="thumbnail"
                onMouseEnter={() => setHoveredImage(image)}
              />
            ))}
          </div>
          <div className="preview-image flex justify-center items-center main-image w-[300px]">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.name,
                  isFluidWidth: true,
                  src: hoveredImage,
                },
                largeImage: {
                  src: hoveredImage,
                  width: 600,
                  height: 600,
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                enlargedImageContainerDimensions: {
                  width: '120%',
                  height: '120%',
                },
              }}
            />
          </div>
          <div className="details-of-product p-4">
            <h1 className="product-name text-2xl font-bold">{product.name}</h1>
            <p className="shades text-gray-500">{product.shades} Shades</p>
            <div className="price font-bold text-[18px]">
              ₹{product.price}
              <span className="font-normal text-[12px] text-gray-500">
                MRP <span className="line-through">₹{product.mrp}</span>
              </span>
            </div>
            <div className="rating">
              {product.rating} ({product.user_rated} reviews)
            </div>
            <button className="bg-black text-white font-bold rounded-md w-full h-[45px] mt-4">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
