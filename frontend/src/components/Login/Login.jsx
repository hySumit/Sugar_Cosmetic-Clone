import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLoginSuccess = (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log(decodedToken);

      // Save the credential (JWT token) to localStorage
      localStorage.setItem('accessToken', credentialResponse.credential);

      // Save the name and email to localStorage
      localStorage.setItem('name', decodedToken.name);
      localStorage.setItem('email', decodedToken.email);

      console.log("Login Successful");
    } catch (error) {
      console.error("Failed to decode token", error);
    }
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="login-main">
      <div className="login-container flex">
        <section className="login-left w-[38.6%]">
          <div className="img">
            <img
              src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="login-right w-[62.2%] text-center">
          <div className="backarrow">
            <Link to={"/"}>
              <FaArrowLeftLong />
            </Link>
          </div>
          <div className="right-login-container mt-[15%] ">
            <div className="login-greetings flex justify-center ">
              <img src="https://media.sugarcosmetics.com/upload/Hi!.png" />
            </div>
            <div>
              <h2 className="font-sans text-[20px] mt-4">
                Login/Signup Using <span className="font-bold">Google</span>{" "}
              </h2>
            </div>

            <div className="google-auth flex justify-center mt-5">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
            </div>
            <div className="caution w-[75%] m-auto mt-[4vh] text-[#797979] text-[15px]  ">
              <p>
                Registering for this site allows you to access your order status
                and history. Just fill in the above fields, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </p>
            </div>
            <div className="help mt-9">
              <h1 className="font-bold cursor-pointer text-[15px] ">
                {" "}
                Need Help ? <span className="text-[#F74E79]">Contact Us</span>
              </h1>
            </div>

            <div className="border-checkbox text-center mt-2 flex justify-center p-[30px] gap-5 cursor-pointer ">
              <div className="checkbox-wrapper-57">
                <label className="container">
                  <input type="checkbox" />
                  <div className="checkmark"></div>
                </label>
              </div>
              <p>
                Get important updates on Whatsapp{" "}
                <span className="text-[#F74E79]">Terms and Conditions</span>{" "}
              </p>
            </div>
            <div className="agreement mt-5 ">
              <p className="text-[13px]">
                By Signing up or logging in, you agree to our{" "}
                <span className="text-[#F74E79]">Terms and Conditions</span>{" "}
              </p>
            </div>

            <div className="login-footer text-left bg-black text-[#d1d1d1] text-[12px] mt-[10.5px]">
              <p>Copyright © 2024 SUGAR Cosmetics. All rights reserved.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
