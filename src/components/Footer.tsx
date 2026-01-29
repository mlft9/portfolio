import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState<string>(portfolioData.lastUpdate);

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/mlft9/portfolio/commits?per_page=1');
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const commitDate = new Date(data[0].commit.author.date);
            const formattedDate = commitDate.toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            });
            setLastUpdate(formattedDate);
          }
        }
      } catch (error) {
        // En cas d'erreur, on garde la date par défaut de portfolioData
        console.error('Erreur lors de la récupération de la date du dernier commit:', error);
      }
    };

    fetchLastCommit();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        <p>Construit avec React & TypeScript, par Maxime</p>
        <p className="last-update">Dernière mise à jour : {lastUpdate}</p>
      </div>
    </footer>
  );
};

export default Footer;
