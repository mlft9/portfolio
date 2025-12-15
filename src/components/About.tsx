import React from 'react';
import './About.css';

interface AboutProps {
  text: string;
  image?: string;
}

const About: React.FC<AboutProps> = ({ text, image }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          {image && (
            <div className="about-image">
              <img src={image} alt="Profile" />
            </div>
          )}
          <div className="about-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
