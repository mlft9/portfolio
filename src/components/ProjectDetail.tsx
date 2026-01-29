import React, { useState } from 'react';
import './ProjectDetail.css';

interface ProjectDetailData {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  sections: {
    title: string;
    content: string;
    image?: string;
    image2?: string;
  }[];
  features?: string[];
  challenges?: string[];
  results?: string[];
}

interface ProjectDetailProps {
  project: ProjectDetailData;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        
        <div className="project-detail-content">
          {/* Header */}
          <header className="project-header">
            <h1>{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="project-tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </header>

          {/* Description principale */}
          <section className="project-overview">
            <h2>Vue d'ensemble</h2>
            <p>{project.description}</p>
          </section>

          {/* Sections détaillées */}
          {project.sections.map((section, index) => (
            <section key={index} className="project-section">
              <h2>{section.title}</h2>
              {(section.image || section.image2) && (
                <div className={`section-images ${section.image2 ? 'two-images' : ''}`}>
                  {section.image && (
                    <div className="section-image" onClick={() => setZoomedImage(section.image!)}>
                      <img src={section.image} alt={section.title} />
                    </div>
                  )}
                  {section.image2 && (
                    <div className="section-image" onClick={() => setZoomedImage(section.image2!)}>
                      <img src={section.image2} alt={`${section.title} - 2`} />
                    </div>
                  )}
                </div>
              )}
              <p>{section.content}</p>
            </section>
          ))}

          {/* Fonctionnalités */}
          {project.features && project.features.length > 0 && (
            <section className="project-features">
              <h2>Fonctionnalités principales</h2>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Défis */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="project-challenges">
              <h2>Défis techniques</h2>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Résultats */}
          {project.results && project.results.length > 0 && (
            <section className="project-results">
              <h2>Résultats & Apprentissages</h2>
              <ul>
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Image zoom modal */}
      {zoomedImage && (
        <div className="image-zoom-overlay" onClick={(e) => {
          e.stopPropagation();
          setZoomedImage(null);
        }}>
          <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
            <button className="image-zoom-close" onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}>
              ✕
            </button>
            <img src={zoomedImage} alt="Zoom" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
