import { NavLink, useParams } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/Context";
import { ColorRing } from "react-loader-spinner";
import { FcLike } from "react-icons/fc";
import SingleRecipe from "./SingleRecipe";

const ChefRecipes = () => {
  const [chefData, setChefData] = useState({});
  const [chefRecipes, setChefRecipes] = useState([]);
  const { id } = useParams();

  const { dataLoading, setDataLoading } = useGlobalContext();

  // console.log(loading)

  const getChefData = async () => {
    setDataLoading(true);
    const response = await fetch(
      `https://foodie-server-shaikatpal56-gmailcom.vercel.app/chefs/${id}`
    );
    const data = await response.json();
    // console.log(data)
    if (data) setChefData(data);
    setDataLoading(false);
  };

  const getRecipes = async () => {
    setDataLoading(true);
    const response = await fetch(
      `https://foodie-server-shaikatpal56-gmailcom.vercel.app/recipes/${id}`
    );
    const data = await response.json();

    if (data) setChefRecipes(data);
    setDataLoading(false);
  };

  useEffect(() => {
    getChefData();
    // console.log(recipes)
    getRecipes();
  }, []);

  if (dataLoading) {
    return (
      <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl p-3">
        <figure className="w-2/5">
          <LazyLoad>
            <img
              src={chefData.image}
              className="h-full object-cover object-center "
              alt="Movie"
            />
          </LazyLoad>
        </figure>
        <div className="card-body w-3/5">
          <div className="font-bold text-xl mb-2 flex items-center gap-2">
            Name: {chefData.name}
          </div>
          <p className="text-gray-700 text-base mb-2">
            Experience: {chefData.experience} years of experience
          </p>
          <p className="text-gray-700 text-base mb-2">
            Total Recipes: {chefData.numRecipes} recipes
          </p>
          <p className="text-gray-700 text-base mb-2 flex items-center gap-2">
            <FcLike /> {chefData.likes}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Description: {chefData.bio}
          </p>
        </div>
      </div>
      <h1 className="text-center text-5xl font-black my-8">
        {chefData.name}'s Recipe List
      </h1>
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        {chefRecipes.map((recipe) => (
          <SingleRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default ChefRecipes;
