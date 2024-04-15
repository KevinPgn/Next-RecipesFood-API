import { RecipeDetail } from '@/components/RecipeDetail'
import React from 'react'


const RecipeInfo = async ({params}: any) => {
  async function getRecipe() {
    const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
    const data = await res.json()
    return data
  }

  const recipe = await getRecipe()
  
  return (
    <>
      <RecipeDetail recipe={recipe}/>
    </>
  )
}

export default RecipeInfo