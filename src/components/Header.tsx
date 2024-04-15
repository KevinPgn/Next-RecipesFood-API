"use client"
import Link from "next/link"
import { Input } from "./ui/input"
import { useSearch } from "@/lib/store"
import { useDebounce } from "use-debounce"
import { useEffect } from "react";

export const Header = () => {
  const setSearch = useSearch((state: any) => state.setSearch);
  const setData = useSearch((state: any) => state.setData);
  const search = useSearch((state: any) => state.search);
  const [debounced] = useDebounce(search, 200);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${debounced}`
        );
        const data = await res.json();
        setData(data.data.recipes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [debounced, setData]);

  return (
    <>
      <header className="w-full h-20 border-b-2">
        <nav className="flex items-center justify-between max-w-[1300px] mx-auto h-full">
          <Link href="/">
            <h1 className="cursor-pointer text-lg">FoodRecipe</h1>
          </Link>
            <Input
              className="w-62 md:w-80"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for recipes"
            />
          <div className="hidden md:flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/favorites">Favorites</Link>
          </div>
        </nav>
      </header>
    </>
  );
};