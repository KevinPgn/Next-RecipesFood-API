"use client"
import { deleteRecipe } from "@/server/Actions"
import { Button } from "./button"
import { useState } from "react"

export const ButtonDelete = ({id}: any) => {
  const [modal, setModal] = useState(false)
  
  return <>
    <Button 
    variant="destructive"
    onClick={() => setModal(!modal)} className="w-52">Delete</Button>

    {modal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-5 rounded-lg">
          <h2 className="text-lg font-bold mb-5">Are you sure you want to delete this recipe?</h2>
          <div className="flex gap-5">
            <Button variant="destructive" onClick={() => {
              deleteRecipe(id)
              setModal(false)
            }
            }>Yes</Button>
            <Button variant="outline" onClick={() => setModal(false)}>No</Button>
          </div>
        </div>
      </div>
    )}
  </>
}