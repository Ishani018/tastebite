const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tastebite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Define the Recipe schema and model
const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  steps: String,
  image: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// API endpoint to fetch all recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});

// API endpoint to fetch a single recipe by ID
app.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching recipe details' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
