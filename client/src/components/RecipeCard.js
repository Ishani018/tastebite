import React from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
    </div>
  );
}

export default RecipeCard;
