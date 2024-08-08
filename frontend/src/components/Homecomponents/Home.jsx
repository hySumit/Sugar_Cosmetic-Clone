import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCardCrousel from './ProductCardCrousel';


const Data = [
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/61522ed5-ff05-4e85-b1d6-f62f45ee0c9e.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/42c0683e-b00b-4c7c-af00-b4904055c751.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/4b4066a9-3fd8-4043-a764-a275d0ca75ed.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/527cadb2-e3c3-453a-94ce-12a278cadfee.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/637eafeb-537e-4826-8957-231e24351fec.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/aab14836-1e3a-4931-98c7-7a22e765cdef.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/a14cc773-4e9d-4ed1-8a62-fca9913cce63.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/9f2d819e-5dde-4512-8824-846ab25070b7.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/e65b6b2e-a161-47fa-b7a8-bc0fc1f754fc.jpg&w=1920&q=75"
];

const Data2 = [
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/e96bf249-21bc-4811-968b-dd5d02016052.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/b98f1067-a40a-4165-baae-109a003ba9fc.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/0c107c45-d701-4701-8846-d049024c3eba.jpg&w=1920&q=75",
]

const Data3 = [
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/27dc3584-f255-4797-989a-c024b6e8e75a.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/12646774-57aa-47d3-acc0-18e97ecaa1e3.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/ebb2641c-c5d2-40fa-b1f9-c6d8b3609ecf.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/c8acf644-968c-4b3d-8b5c-2b1b14f3291c.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/ced6d159-c85e-4de1-9056-cfae8deb7217.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/62dc5b99-af75-4d4c-affe-d4e3b5d9cd69.jpg&w=1920&q=75"
]

import Crousel2 from './Crousel2';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown';
import PhotoCarousel from '../Navbar/Carousel';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products/');
        setProducts(response.data.Data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  return (
    <div className='home-main bg-[#F2F2F2]'>
      
      <Navbar/>
      <Dropdown/>
      <PhotoCarousel/>

      <div className="banner1 pt-11 w-[95%] m-auto">
        <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F95774325-56f4-41f2-af24-1e93b00f5c34.jpg&w=1920&q=75" alt="Rakhi-card-banner" />
      </div> 
      <div className="crousel-parent">
        <div className="product-container">
        <div className="stylish-text-container">
          <h1 className='stylish-title'>BEST SELLERS</h1>
          </div>
          <ProductCardCrousel data={getProductsByCategory("bestseller")} />
        </div>
      </div>
      <div className="crousel-parent">
        <div className="product-container">
        <div className="stylish-text-container">
          <h1 className='stylish-title'>MAKEUP KITS & COMBOS</h1>
          </div>
          <ProductCardCrousel data={getProductsByCategory("makeupkits")} />
        </div>
      </div>
      <div className="crousel2">
      <div className="stylish-text-container">
          <h1 className='stylish-title icons '>SUGAR ICONICS IN-FOCUS</h1>
          </div>
      <Crousel2 props={Data} />
      </div>
      <div className="crousel-parent">
        <div className="product-container">
        <div className="stylish-text-container">
          <h1 className='stylish-title'>EXCLUSIVE RANGE LAUNCH</h1>
          </div>
          <ProductCardCrousel data={getProductsByCategory("exclusive")} />
        </div>
      </div>
      <div className="banner2">
      <div className="stylish-text-container">
          <h1 className='stylish-title icons '>
          CLUB VELLVETTE</h1>
          </div>
          <div className="banner2 pt-11 w-[95%] m-auto">
        <img className=' rounded-[20px] ' src="https://d32baadbbpueqt.cloudfront.net/Clubvellvette/Desktop_Banner.jpg" alt="Rakhi-card-banner" />
      </div> 
      </div>
      <div className="crousel2">
      <div className="stylish-text-container">
          <h1 className='stylish-title icons '>SUGAR ICONICS IN-FOCUS</h1>
          </div>
      <Crousel2 props={Data2} />
      </div>
      <div className="banner2">
      <div className="stylish-text-container">
          <h1 className='stylish-title icons '>
          CLUB VELLVETTE</h1>
          </div>
          <div className="banner2 pt-11 w-[80%] m-auto">
        <img className=' rounded-[20px] ' src="https://in.sugarcosmetics.com/_next/image?url=https://images.sugarcosmetics.com/Homepage/85d7b52c-6823-404f-99e0-d6e1ba1d4019.jpg&w=1920&q=75" />
      </div> 
      </div>
      <div className="banner2">
      <div className="stylish-text-container">
          <h1 className='stylish-title icons '>
          REFER YOUR FRIENDS</h1>
          </div>
          <div className="banner2 pt-11 w-[95%] m-auto">
        <img className=' rounded-[20px] ' src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FHomepage%2F14875371-a8da-489a-b5cb-4c6730b4cdc7.jpg&w=1920&q=75" />
      </div> 
      </div>
      <div className="crousel-parent">
        <div className="product-container">
          <div className="stylish-text-container">
          <h1 className='stylish-title'>SKINCARE BASICS</h1>
          </div>
          <ProductCardCrousel data={getProductsByCategory("skincare")} />
        </div>
      </div>
      <div className="crousel2">
      <div className="stylish-text-container">
          <h1 className='stylish-title icons '>SUGAR BEAUTY BLOG</h1>
          </div>
      <Crousel2 props={Data3} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
