import { useState } from "react";
import AddRecipeForm from "./Components/AddRecipeForm";
import RecipeList from "./Components/RecipeList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
