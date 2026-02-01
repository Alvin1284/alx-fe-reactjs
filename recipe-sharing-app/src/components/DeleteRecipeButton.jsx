import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} style={{
      backgroundColor: '#f44336',
      color: 'white',
      padding: '12px 24px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginTop: '20px',
      transition: 'background-color 0.3s'
    }}
    onMouseOver={(e) => e.target.style.backgroundColor = '#da190b'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
