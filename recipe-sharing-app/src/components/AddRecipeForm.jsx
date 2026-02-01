// AddRecipeForm component
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>Add New Recipe</h2>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
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
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
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
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 24px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >Add Recipe</button>
    </form>
  );
};
export default AddRecipeForm;