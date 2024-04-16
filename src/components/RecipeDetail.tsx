"use client"

import { ButtonFavorite } from "./ui/ButtonFavorite"

export const RecipeDetail = ({recipe}:any) => {
  
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:gap-38 mx-auto max-w-[1300px] mt-10">
        <div className="w-full md:w-[500px] h-[400px]">
          <img src={recipe.data.recipe.image_url} alt={recipe.data.recipe.title} className="rounded-lg h-full w-full object-cover" />
        </div>

        <div className="mt-5 mx-auto md:mt-0 flex flex-col">
          <span className="text-md font-bold text-green-600">{recipe.data.recipe.publisher}</span>
          <span className="text-2xl font-bold mt-2 text-gray-800">{recipe.data.recipe.title}</span>
          <ButtonFavorite recipe={recipe}/>

          <div className="mt-5">
            <span className="font-bold text-lg">Ingredients:</span>
            <ul className="mt-5 flex flex-col gap-3">
              {recipe.data.recipe.ingredients.map((ingredient:any, index:number) => <li className="flex gap-2" key={index}>
                <span className="text-lg font-bold">{ingredient.quantity}</span>
                <span className="text-md">{ingredient.unit}</span> 
                <span className="text-md font-bold">{ingredient.description}</span>
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
