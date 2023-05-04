import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useGlobalContext } from "../context/Context";
import LazyLoad from "react-lazy-load";
import { Rating, Stack } from "@mui/material";
import { deleteRecipeDB } from "../loader/LoaderFunctions";

const FavouriteRecipes = () => {
  const [chefRecipes, setChefRecipes] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const { ids, dataLoading, setDataLoading, loading } = useGlobalContext();

  const favList = () => {
    const recipeList = [];
    for (let id of ids) {
        // console.log(chefRecipes)
      const recipe = chefRecipes.find((item) => {
        return item.id === id;
        // console.log(item)
      });
      recipeList.push(recipe);
    }
    setFavRecipes([...recipeList]);
    
  }

  const getRecipes = async () => {
    setDataLoading(true);
    const response = await fetch(
      `https://foodie-server-shaikatpal56-gmailcom.vercel.app/recipes`
    );
    const data = await response.json();

    return data
  };

  

  useEffect(() => {
    // console.log('hello')
    getRecipes().then(item => setChefRecipes(item))
    // console.log(data)
    setDataLoading(false);
    // console.log(chefRecipes)
    
  }, []);

  useEffect(() => {
    favList()
  })

 

  const deleteFavouriteList = () => {
    deleteRecipeDB();
  };

  if (loading) {
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
    {/* <button className="btn m-5" onClick={deleteFavouriteList}>Delete Favourite List</button>
    <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
    {favRecipes.map((recipe) => {
        return (
        <div className="card card-compact shadow-xl" key={recipe.id}>
            <figure>
            <LazyLoad>
                <img src={recipe.image} alt={recipe.name} />
            </LazyLoad>
            </figure>
            <div className="card-body">
            <div className="flex justify-between items-center">
                <h2 className="card-title">{recipe.name}</h2>
                <Stack spacing={1}>
                <Rating
                    name="half-rating-read"
                    defaultValue={recipe.ratings}
                    precision={0.5}
                    readOnly
                />
                </Stack>
            </div>
            <div className="flex flex-wrap gap-4">
                <span className="border-b-2 border-orange-500 font-semibold">
                Ingridients:
                </span>
                {recipe.ingredients.map((ing, index) => (
                <span className="capitalize" key={index}>
                    {ing}
                </span>
                ))}
            </div>
            <div>
                <span className="font-semibold border-b-2 border-orange-500">
                Coocking Method
                </span>
                <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: recipe.method }}
                />
            </div>
            <div className="card-actions justify-end mb-0 mt-3">
                <button className="btn bg-orange-500 border-none">
                Delete Recipe
                </button>
            </div>
            </div>
        </div>
        );
    })}
    </div> */}
    <h1>{favList.length}</h1>
    </>
  );

};

export default FavouriteRecipes;
