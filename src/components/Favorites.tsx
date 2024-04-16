import { ButtonDelete } from "./ui/ButtonDelete"
import { ButtonGetRecipeDetail } from "./ui/ButtonGetRecipeDetail"

export const Favorites = ({recipesFavorite}: any) => {
  return <>
  <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-20">
      {
        recipesFavorite.map((recipe: any) => (
          <div key={recipe.id} className="border my-4 w-[300px]">
            <img src={recipe.image_url} alt={recipe.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h2 className="text-lg mb-3 font-bold">{recipe.title}</h2>
              <p className="text-sm mb-5 text-slate-500">{recipe.publisher}</p>
              <div className="flex gap-2 items-center">
                <ButtonGetRecipeDetail id={recipe.id} />
                <ButtonDelete id={recipe.id} />
              </div>
            </div>
          </div>
        ))
      }
  </div>
  </>
}