import React from 'react';
import './Hero.css';

interface HeroProps {
  name: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, description }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">{name}</span>
        </h1>
        <h2 className="hero-subtitle">{title}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Voir mes projets
          </button>
          <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
