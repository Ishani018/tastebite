import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './ViewRecipes.css';

function ViewRecipes() {
  const [recipes, setRecipes] = useState([
    {
      name: 'Pasta',
      ingredients: 'Noodles, Sauce',
      steps: '1. Boil water in a large pot. 2. Add noodles and cook for 8-10 minutes, stirring occasionally. 3. In a separate pan, heat olive oil and sauté garlic for 2 minutes. 4. Add sauce to the garlic and simmer for 5 minutes. 5. Drain the noodles and mix with the sauce. 6. Sprinkle with Parmesan cheese and serve.',
      image: 'https://i.pinimg.com/736x/c9/83/e6/c983e6a5cf9c17878fc346a5c3016fe9.jpg',
    },
    {
      name: 'Salad',
      ingredients: 'Lettuce, Dressing',
      steps: '1. Wash and chop lettuce, tomatoes, and cucumber. 2. Combine vegetables in a bowl. 3. Add olives and croutons for crunch. 4. Drizzle with your favorite dressing and toss to combine.',
      image: 'https://i.pinimg.com/736x/a9/46/47/a946479fe33046e5730198e21161045d.jpg',
    },
    {
      name: 'Pizza',
      ingredients: 'Dough, Cheese, Toppings',
      steps: '1. Preheat your oven to 475°F (245°C). 2. Roll out the pizza dough on a floured surface. 3. Spread tomato sauce evenly on the dough. 4. Add a layer of mozzarella cheese and top with pepperoni and sliced bell peppers. 5. Bake in the oven for 10-12 minutes, until the crust is golden and cheese is bubbly. 6. Slice and serve.',
      image: 'https://i.pinimg.com/736x/48/54/9a/48549a250e3321f46608e2111ee62188.jpg',
    },
    {
      name: 'Burger',
      ingredients: 'Bun, Patty, Lettuce',
      steps: '1. Cook the patty in a skillet or on a grill for 5-7 minutes per side. 2. Toast the buns in the oven or on a grill. 3. Assemble the burger by layering the cooked patty, lettuce, tomato, cheese, pickles, ketchup, and mustard on the bottom bun. 4. Top with the other bun and serve.',
      image: 'https://i.pinimg.com/736x/8c/f4/ce/8cf4cea7fb7ca0995ed98ba9dc4a7ffc.jpg',
    },
    {
      name: 'Soup',
      ingredients: 'Broth, Vegetables',
      steps: '1. Heat the broth in a large pot. 2. Add vegetables and cook for 15-20 minutes until tender. 3. Season with salt, pepper, and your choice of herbs. 4. Drizzle with olive oil and serve hot.',
      image: 'https://i.pinimg.com/736x/35/ce/54/35ce542fe49975449b39ef61f5d19b39.jpg',
    },

    {
      name: 'Sushi',
      ingredients: 'Rice, Fish, Nori',
      steps: '1. Cook sushi rice according to package instructions. 2. Slice fish into thin pieces. 3. Lay out a sheet of nori on a bamboo mat. 4. Spread the rice evenly on the nori, leaving a small border. 5. Place fish in the center of the rice. 6. Roll tightly, slice, and serve with soy sauce and wasabi.',
      image: 'https://i.pinimg.com/736x/eb/28/e2/eb28e2b44b88d96af8fdc2d6608ac134.jpg',
    },
    {
      name: 'Cake',
      ingredients: 'Flour, Sugar, Eggs',
      steps: '1. Preheat oven to 350°F (175°C). 2. Cream butter and sugar together in a bowl. 3. Add eggs one at a time, beating after each addition. 4. Stir in vanilla extract. 5. Gradually add flour and baking powder. 6. Pour into a greased cake pan and bake for 25-30 minutes. 7. Let it cool and frost with your favorite icing.',
      image: 'https://i.pinimg.com/736x/76/17/f9/7617f9f872ccf3ca49ed2da1948d2b40.jpg',
    },
    {
      name: 'Sandwich',
      ingredients: 'Bread, Cheese, Ham',
      steps: '1. Lay slices of bread on a flat surface. 2. Spread mustard and mayonnaise on each slice. 3. Add a layer of cheese, ham, lettuce, and tomato. 4. Top with the other slice of bread and serve.',
      image: 'https://i.pinimg.com/736x/4a/86/41/4a8641ee96aa08c42cea166581f50ab4.jpg',
    },
    {
      name: 'Tacos',
      ingredients: 'Tortilla, Meat, Vegetables',
      steps: '1. Cook the meat of your choice (chicken, beef, etc.). 2. Warm tortillas in a pan or microwave. 3. Add cooked meat to the tortilla. 4. Top with lettuce, tomato, cheese, and a dollop of sour cream. 5. Fold the tortilla and serve.',
      image: 'https://i.pinimg.com/736x/3f/5c/0d/3f5c0d09c5fa74d8bdae3e56b04682a9.jpg',
    },
    {
      name: 'Ice Cream',
      ingredients: 'Milk, Sugar, Flavoring',
      steps: '1. Mix milk and sugar in a bowl until sugar dissolves. 2. Add flavoring of choice (e.g., vanilla extract, cocoa powder). 3. Pour into an ice cream maker and churn according to the manufacturer’s instructions. 4. Freeze until firm and serve.',
      image: 'https://i.pinimg.com/736x/5f/20/31/5f2031eedce9bb359ef465724ed3378b.jpg',
    },
    {
      name: 'Pancakes',
      ingredients: 'Flour, Eggs, Milk',
      steps: '1. Mix flour, sugar, and baking powder in a bowl. 2. Whisk in eggs, milk, and melted butter until smooth. 3. Heat a griddle or pan and pour batter in small circles. 4. Cook until bubbles form, then flip and cook the other side. 5. Serve with syrup and butter.',
      image: 'https://i.pinimg.com/736x/25/24/92/252492030bd1190a5ed53f573aed1c3d.jpg',
    },
    {
      name: 'Fries',
      ingredients: 'Potatoes, Oil, Salt',
      steps: '1. Peel and slice potatoes into thin strips. 2. Heat oil in a deep fryer or large pot to 350°F (175°C). 3. Fry the potato strips in batches for 3-5 minutes until golden and crispy. 4. Drain on paper towels and sprinkle with salt.',
      image: 'https://i.pinimg.com/236x/1b/ab/ba/1babba409d98f521ef3dc324f9855fbf.jpg',
    },
    {
      name: 'Grilled Chicken',
      ingredients: 'Chicken, Olive Oil, Herbs',
      steps: '1. Preheat grill to medium-high heat. 2. Rub chicken with olive oil, garlic, lemon juice, salt, and pepper. 3. Grill chicken for 6-8 minutes on each side until cooked through and internal temperature reaches 165°F (74°C). 4. Serve with your favorite side dish.',
      image: 'https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg',
    },
    {
      name: 'Stir Fry',
      ingredients: 'Vegetables, Soy Sauce, Noodles',
      steps: '1. Slice chicken and vegetables into thin strips. 2. Heat olive oil in a large pan over medium-high heat. 3. Add chicken and cook for 5-7 minutes until browned. 4. Add vegetables and cook for another 3-5 minutes until tender. 5. Pour in soy sauce and stir to combine. 6. Serve over rice or noodles.',
      image: 'https://i.pinimg.com/736x/81/0b/80/810b808842f78a509dabb1c39c12ad2f.jpg',
    },
    {
      name: 'Brownies',
      ingredients: 'Chocolate, Flour, Sugar',
      steps: '1. Preheat oven to 350°F (175°C). 2. Melt butter and mix with sugar and eggs. 3. Stir in cocoa powder, flour, baking powder, and vanilla extract until combined. 4. Pour into a greased pan and bake for 20-25 minutes. 5. Let cool before slicing into squares.',
      image: 'https://i.pinimg.com/736x/69/8f/16/698f16c0e464d916f652a44344978624.jpg',
    } ]);
    



  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Handle the click on a recipe card
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Handle the back button click to return to the recipe list
  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="view-recipes">
      <h2>All Recipes</h2>

      {selectedRecipe ? (
        // Display the detailed view of the selected recipe
        <div className="recipe-details">
          <h3>{selectedRecipe.name}</h3>
          <img src={selectedRecipe.image} alt={selectedRecipe.name} />
          <h4>Ingredients:</h4>
          <p>{selectedRecipe.ingredients}</p>
          <h4>Steps:</h4>
          <p>{selectedRecipe.steps}</p>
          <button onClick={handleBackClick}>Back to List</button>
        </div>
      ) : (
        // Display the recipe list if no recipe is selected
        <div className="recipe-list">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe)} // Pass the recipe on click
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewRecipes;



