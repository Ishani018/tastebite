import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const imageLinks = [
    'https://i.pinimg.com/736x/c9/83/e6/c983e6a5cf9c17878fc346a5c3016fe9.jpg',
    'https://i.pinimg.com/736x/a9/46/47/a946479fe33046e5730198e21161045d.jpg',
    'https://i.pinimg.com/736x/48/54/9a/48549a250e3321f46608e2111ee62188.jpg',
    'https://i.pinimg.com/736x/8c/f4/ce/8cf4cea7fb7ca0995ed98ba9dc4a7ffc.jpg',
    'https://i.pinimg.com/736x/35/ce/54/35ce542fe49975449b39ef61f5d19b39.jpg',
    'https://i.pinimg.com/736x/eb/28/e2/eb28e2b44b88d96af8fdc2d6608ac134.jpg',
    'https://i.pinimg.com/736x/76/17/f9/7617f9f872ccf3ca49ed2da1948d2b40.jpg',
    'https://i.pinimg.com/736x/4a/86/41/4a8641ee96aa08c42cea166581f50ab4.jpg',
    'https://i.pinimg.com/736x/3f/5c/0d/3f5c0d09c5fa74d8bdae3e56b04682a9.jpg',
    'https://i.pinimg.com/736x/5f/20/31/5f2031eedce9bb359ef465724ed3378b.jpg',
    'https://i.pinimg.com/736x/25/24/92/252492030bd1190a5ed53f573aed1c3d.jpg',
    'https://i.pinimg.com/236x/1b/ab/ba/1babba409d98f521ef3dc324f9855fbf.jpg',
    'https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg',
    'https://i.pinimg.com/736x/81/0b/80/810b808842f78a509dabb1c39c12ad2f.jpg',
    'https://i.pinimg.com/736x/69/8f/16/698f16c0e464d916f652a44344978624.jpg',
  ];

  const [displayedImages, setDisplayedImages] = useState([]);

  const shuffleImages = () => {
    const shuffled = [...imageLinks]
      .sort(() => Math.random() - 0.5)
      .slice(0, 9); // Pick 9 random images
    setDisplayedImages(shuffled);
  };

  useEffect(() => {
    shuffleImages(); // Initial load
    const interval = setInterval(shuffleImages, 5000); // Change images every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="text-content">
          <h1>TasteBite</h1>
          <h4>Explore a world of delicious recipes</h4>
        </div>
        <div className="image-grid">
          {displayedImages.map((image, index) => (
            <div key={index} className="image-cell">
              <img src={image} alt={`Food ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i> Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
