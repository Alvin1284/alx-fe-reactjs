import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{
      margin: '20px 0',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <label style={{
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#555',
        fontSize: '14px'
      }}>Search Recipes</label>
      <input
        type="text"
        placeholder="Search by recipe title..."
        onChange={handleSearchChange}
        style={{
          padding: '12px',
          width: '100%',
          fontSize: '16px',
          border: '2px solid #ddd',
          borderRadius: '4px',
          boxSizing: 'border-box',
          transition: 'border-color 0.3s'
        }}
        onFocus={(e) => e.target.style.borderColor = '#2196F3'}
        onBlur={(e) => e.target.style.borderColor = '#ddd'}
      />
    </div>
  );
};

export default SearchBar;
