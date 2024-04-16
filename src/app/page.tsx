import { Available } from "@/components/Available";
import { RecipesList } from "@/components/RecipesList";

export default function Home() {
  return (
   <>
    <RecipesList />
    <Available />
   </>
  );
}
