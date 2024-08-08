import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Navbar/Dropdown";
import PhotoCarousel from "./components/Navbar/Carousel";
import { Home } from "./components/Homecomponents/Home";
import { Route, Routes } from "react-router-dom";
import AllRoutes from "./components/Routes/AllRoutes";
import SingleProductPage from "./components/Homecomponents/SingleProductPage";

function App() {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/" element={<AllRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
