import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  // Generate recommendations when favorites change
  useEffect(() => {
    if (favorites.length > 0) {
      generateRecommendations();
    }
  }, [favorites, generateRecommendations]);

  // Don't show recommendations if user has no favorites
  if (favorites.length === 0) {
    return null;
  }

  return (
    <div style={{
      backgroundColor: '#d1ecf1',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0, color: '#0c5460' }}>🎯 Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p style={{ color: '#0c5460', fontStyle: 'italic' }}>
          Check back later for personalized recommendations!
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {recommendations.map(recipe => (
            <div key={recipe.id} style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '6px',
              border: '1px solid #17a2b8'
            }}>
              <h3 style={{ margin: '0 0 8px 0' }}>
                <Link to={`/recipe/${recipe.id}`} style={{
                  color: '#0c5460',
                  textDecoration: 'none'
                }}>{recipe.title}</Link>
              </h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                {recipe.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;
