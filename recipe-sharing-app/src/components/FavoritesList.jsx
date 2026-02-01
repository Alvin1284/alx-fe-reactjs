import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Get full recipe objects for favorited recipe IDs
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(recipe => recipe !== undefined);

  return (
    <div style={{
      backgroundColor: '#fff3cd',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, color: '#856404' }}>⭐ My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#856404', fontStyle: 'italic' }}>
          No favorite recipes yet. Start adding some!
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '6px',
              border: '1px solid #ffc107',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 8px 0' }}>
                  <Link to={`/recipe/${recipe.id}`} style={{
                    color: '#856404',
                    textDecoration: 'none'
                  }}>{recipe.title}</Link>
                </h3>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                  {recipe.description.substring(0, 100)}...
                </p>
              </div>
              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  marginLeft: '15px',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
