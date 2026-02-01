import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "recipe-sharing-app/src/components/RecipeList.jsx";
import RecipeDetails from "./components/RecipeDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing Application</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
