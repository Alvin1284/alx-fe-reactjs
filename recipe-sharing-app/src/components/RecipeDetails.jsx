import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to Recipes</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <Link to="/" style={{
        display: 'inline-block',
        marginBottom: '20px',
        color: '#2196F3',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 'bold'
      }}>← Back to Recipes</Link>
      <div style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px', flex: 1 }}>
            {recipe.title}
          </h1>
          <button
            onClick={toggleFavorite}
            style={{
              background: 'none',
              border: '2px solid #ffc107',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.2s',
              backgroundColor: isFavorite ? '#fff3cd' : 'white'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.backgroundColor = '#fff3cd';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = isFavorite ? '#fff3cd' : 'white';
            }}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>{recipe.description}</p>
      </div>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
