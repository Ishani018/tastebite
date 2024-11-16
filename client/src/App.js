import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddRecipe from './components/AddRecipe';
import ViewRecipes from './components/ViewRecipes';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/view-recipes" element={<ViewRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
