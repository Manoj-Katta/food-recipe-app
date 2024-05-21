import { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipeItem";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Welcome to Food - Recipes</h1>
      {loading ? (
        <div>Loading...</div>
      ) : recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {recipeList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>Nothing to show. Please search something..</div>
      )}
    </div>
  );
}
