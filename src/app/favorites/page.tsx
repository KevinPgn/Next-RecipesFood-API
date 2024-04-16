import React from 'react'
import { getAllRecipeFromDB } from '@/server/Actions'
import { Favorites } from '@/components/Favorites'

const FavoritesDB = async () => {
  const recipes = await getAllRecipeFromDB()
 
  return (
    <Favorites recipesFavorite={recipes} />
  )
}

export default FavoritesDB