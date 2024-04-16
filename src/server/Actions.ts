"use server"

import {prisma} from '@/lib/db'
import { revalidatePath } from 'next/cache'
import {z} from 'zod'

/* donnée */

export async function getAllRecipeFromDB(){
    const recipes = await prisma.recipe.findMany({
        select: {
            id: true,
            title: true,
            image_url: true,
            publisher: true,
            favory: true
        }
    })

    return recipes
}

/* create */

const RecipeSchema = z.object({
    id: z.string(),
    title: z.string(),
    image_url: z.string(),
    publisher: z.string(),
    favory: z.boolean().default(false)
})

export async function createNewRecipe(id: string, title: string, image_url:string, publisher: string){
    const recipe = RecipeSchema.parse({id, title, image_url, publisher})
   
    await prisma.recipe.create({
        data: {
            id: recipe.id,
            title: recipe.title,
            image_url: recipe.image_url,
            publisher: recipe.publisher,
            favory: true
        }
    })

    revalidatePath('/')
}

/* delete */

const deleteRecipeSchema = z.object({
    id: z.string()
})

export async function deleteRecipe(id: string){
    const recipe = deleteRecipeSchema.parse({id})
    
    await prisma.recipe.delete({
        where: {
            id: recipe.id
        }
    })

    revalidatePath('/favorites')
}