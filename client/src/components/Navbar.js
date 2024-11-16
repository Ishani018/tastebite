import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>TasteBite</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/view-recipes">View Recipes</Link>
      </div>
    </nav>
  );
}

export default Navbar;
