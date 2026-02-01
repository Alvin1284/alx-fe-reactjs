import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to Recipes</Link>
      </div>
    );
  }

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
        <h1 style={{ marginTop: 0, color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{recipe.title}</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>{recipe.description}</p>
      </div>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
