import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        <p>Construit avec React & TypeScript, par Maxime</p>
      </div>
    </footer>
  );
};

export default Footer;
