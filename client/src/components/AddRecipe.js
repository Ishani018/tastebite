import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe() {
  const [recipe, setRecipe] = useState({ name: '', ingredients: '', steps: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Recipe added: ${recipe.name}`);
    setRecipe({ name: '', ingredients: '', steps: '' });
  };

  return (
    <div className="add-recipe">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <textarea
          name="steps"
          placeholder="Steps"
          value={recipe.steps}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
