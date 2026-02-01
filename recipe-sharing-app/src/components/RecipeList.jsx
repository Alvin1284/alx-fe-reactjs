// RecipeList component
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Filter recipes whenever the search term or recipes change
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);

  // Display filtered recipes if there's a search term, otherwise show all recipes
  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Recipes</h2>
      {displayedRecipes.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          color: '#666'
        }}>
          <p style={{ fontSize: '18px', margin: 0 }}>
            {searchTerm ? '🔍 No recipes found matching your search.' : '📝 No recipes available. Add one above!'}
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {displayedRecipes.map((recipe) => (
            <div key={recipe.id} style={{
              padding: '20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '10px' }}>
                <Link to={`/recipe/${recipe.id}`} style={{
                  color: '#2196F3',
                  textDecoration: 'none',
                  fontSize: '20px'
                }}>{recipe.title}</Link>
              </h3>
              <p style={{
                margin: 0,
                color: '#666',
                lineHeight: '1.5'
              }}>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;