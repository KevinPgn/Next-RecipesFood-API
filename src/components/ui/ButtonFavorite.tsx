import { Button } from "./button"
import { createNewRecipe } from "@/server/Actions"
import { useState } from "react"

export const ButtonFavorite = ({ recipe }: any) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const id = recipe.data.recipe.id
  const title = recipe.data.recipe.title
  const image_url = recipe.data.recipe.image_url
  const publisher = recipe.data.recipe.publisher

  const handleFavoriteClick = () => {
    // Call the createNewRecipe function to add the recipe to the database
    createNewRecipe(id, title, image_url, publisher)
    setIsFavorite(true)
  }

  return (
    <>
      <Button
        className="mt-5 w-52"
        onClick={handleFavoriteClick}
        disabled={isFavorite}
      >
        {isFavorite ? "FAVORITE ADDED" : "SAVE AS FAVORITE"}
      </Button>
    </>
  )
}