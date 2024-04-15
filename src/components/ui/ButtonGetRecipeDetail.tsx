"use client"
import { useRouter } from "next/navigation"
import { Button } from "./button"


export const ButtonGetRecipeDetail = ({id}: any) => {
  const router = useRouter()
  
  return <>
    <Button
      onClick={() => router.push(`/recipes/${id}`)}
    >
      Get recipe detail
    </Button>
  </>
}