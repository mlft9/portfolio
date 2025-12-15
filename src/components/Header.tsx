import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Fermer le menu après la navigation
  };

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Mon Portfolio</h1>
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>Accueil</button>
          <button onClick={() => scrollToSection('about')}>À propos</button>
          <button onClick={() => scrollToSection('projects')}>Projets</button>
          <button onClick={() => scrollToSection('skills')}>Compétences</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
        {/* Backdrop avec blur */}
        <div 
          className={`menu-backdrop ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
