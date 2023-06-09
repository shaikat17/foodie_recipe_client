
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { toast } from 'react-toastify';
import { useState } from "react";
import { useGlobalContext } from "../context/Context";
import LazyLoad from "react-lazy-load";
import { addToRecipeDB, getRecipeDB } from "../loader/LoaderFunctions";

const SingleRecipe = ({ recipe }) => {
  const [isDisable, setIsDisable] = useState(null)
  const ids = getRecipeDB()

  const handleDisable = (id) => {
    addToRecipeDB(id)
    setIsDisable(true)
    toast.success("Recipe Added To Favourite List")
    // console.log(ids)
  }

  // console.log(ids)

  return (
    <div className="card card-compact shadow-xl">
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
            <span className="border-b-2 border-orange-500 font-semibold">Ingridients:</span>
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
          <button className="btn bg-orange-500 text-white border-none" disabled={isDisable || ids.includes(recipe.id)} onClick={() => handleDisable(recipe.id)}>Add To Favourite</button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
