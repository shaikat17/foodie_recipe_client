import React from "react";
import home_bg from "../assets/home_bg.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-center space-y-3"
      style={{ backgroundImage: `url(${home_bg})` }}
    >
      <h1 className="font-cursive text-6xl text-orange-500 font-black">
        Our Most Popular
      </h1>
      <p className="font-bold text-4xl text-orange-500">Recipes</p>
      <NavLink className="btn bg-orange-500 outline-none text-white border-none">
        Explore Now
      </NavLink>
    </section>
  );
};

export default Banner;
