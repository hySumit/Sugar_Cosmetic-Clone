import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="logo bg-black flex p-[10px] items-center">
          <div>
            <img
              className="w-[250px]"
              src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fimages.sugarcosmetics.com%2FLogo%2F671f139d-fab7-4f41-8b08-d3b2877f83e8.gif&w=256&q=100"
              alt="logo"
            />
          </div>

          <div className="search-input flex">
            <input
              className="border w-[80vh] border-[#acacac] bg-[#212121] rounded p-2"
              type="text"
              placeholder="Try Liquid Lipstic"
            />
            <button className="bg-white rounded w-[100px] p-2 flex items-center justify-center gap-2 ">
              <span>
                <IoSearchOutline />
              </span>
              Search
            </button>
          </div>
          <div className="login-box flex gap-[30px]">
            <div className="login-box-left text-white flex items-center">
              <span className="text-[24px]">
                <IoPersonCircle />
              </span>
              <Link to={"/login"} >Login/Register</Link>
              {/* <p>Login/Register</p> */}
            </div>
            <div className="login-box-right text-white flex">
              <div className="icons">a</div>
              <div className="icons">b</div>
              <div className="icons">c</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
