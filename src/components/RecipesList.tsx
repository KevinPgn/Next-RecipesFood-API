"use client"
import { useSearch } from "@/lib/store";
import { ButtonGetRecipeDetail } from "./ui/ButtonGetRecipeDetail";

export const RecipesList = () => {
  const data = useSearch((state: any) => state.data);

return <>

    {
      data.length === 0 && (
        <div className="text-center mt-5">
          <h1 className="text-2xl text-center mt-5">No recipes found...</h1>
          <h2 className="text-slate-600 mt-3">Try to find one</h2>
        </div>
      )
    }
    <div className="flex flex-wrap max-w-[1600px] mx-auto items-center justify-center gap-10">
    {
      data.map((recipe: any) => (
        <div key={recipe.id} className="border my-4 w-[300px]">
          <img src={recipe.image_url} alt={recipe.title} className="w-full h-40 object-cover" />
          <div className="p-3">
            <h2 className="text-lg mb-3 font-bold">{recipe.title}</h2>
            <p className="text-sm mb-5 text-slate-500">{recipe.publisher}</p>
            <ButtonGetRecipeDetail id={recipe.id} />
          </div>
        </div>
      ))
    }
    </div>
  </>
}