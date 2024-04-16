"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import dataAvailable from "@/data/data"
import { Input } from "./ui/input"

export const Available = () => {
  const [modal, setModal] = useState(false)
  const [value, setValue] = useState("")

  const filterData = dataAvailable.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()))
  
  return <>
    <Button
    className="fixed left-5 top-[100px]"
    onClick={() => setModal(true)}
    >Available search</Button>

    {modal && (
      <div onClick={() => setModal(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div onClick={e => e.stopPropagation()} className="h-full w-4/5 overflow-y-auto bg-white p-5 rounded-lg">
          <h2 className="text-2xl font-bold mb-5">Available search</h2>
          <Input placeholder="Search..." value={value} onChange={(e) => setValue(e.target.value)} />
          <ul className="mt-5 overflow-y-auto">
            {filterData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </>
}