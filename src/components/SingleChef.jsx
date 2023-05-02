import React from "react";
import {FcLike} from 'react-icons/fc'
import { NavLink } from "react-router-dom";

const SingleChef = ({ chef }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-2/4">
        <img src={chef.image} className="h-full " alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="font-bold text-xl mb-2 flex items-center gap-2">Name: {chef.name}</div>
        <p className="text-gray-700 text-base mb-2">Experience: {chef.experience} years of experience
        </p>
        <p className="text-gray-700 text-base mb-2">
          Total Recipes: {chef.numRecipes} recipes
        </p>
        <p className="text-gray-700 text-base mb-2 flex items-center gap-2">
          <FcLike /> { chef.likes}
        </p>
        <NavLink className="btn bg-orange-500 border-none">
          View Recipes
        </NavLink>
      </div>
    </div>
  );
};

export default SingleChef;
