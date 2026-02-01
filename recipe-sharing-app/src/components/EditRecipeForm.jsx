import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  if (!recipe) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    alert('Recipe updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#f0f8ff',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>Edit Recipe</h2>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="title" style={{
          display: 'block',
          marginBottom: '5px',
          fontWeight: 'bold',
          color: '#555'
        }}>Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
          }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="description" style={{
          display: 'block',
          marginBottom: '5px',
          fontWeight: 'bold',
          color: '#555'
        }}>Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="4"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />
      </div>
      <button type="submit" style={{
        backgroundColor: '#2196F3',
        color: 'white',
        padding: '12px 24px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#0b7dda'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
      >Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
